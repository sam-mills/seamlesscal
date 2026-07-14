const { onRequest, onCall, HttpsError } = require('firebase-functions/v2/https')
const { onDocumentUpdated } = require('firebase-functions/v2/firestore')
const { getFirestore } = require('firebase-admin/firestore')
const { initializeApp } = require('firebase-admin/app')
const { google } = require('googleapis')
const { defineSecret } = require('firebase-functions/params')

// 🚀 FIX: Explicitly pull the V1 runtime wrapper instance to handle the background Auth trigger
const functions = require('firebase-functions/v1')

// Define secrets at the top level
const stripeSecretKey = defineSecret('STRIPE_SECRET_KEY')
const stripeWebhookSecret = defineSecret('STRIPE_WEBHOOK_SECRET')

const { welcomeHtml } = require('./welcome-template')
const { upgradeHtml } = require('./upgrade-template')
const { bookingHtml } = require('./booking-template')

initializeApp()
const db = getFirestore()

const apiCache = new Map()
const CACHE_DURATION_MS = 5 * 60 * 1000

// ==========================================
// ENDPOINT 1: PUBLIC WIDGET RENDER DATA FETCH (WITH AUTO-REFRESH)
// ==========================================
exports.getWidgetCalendar = onRequest({ cors: true, invoker: 'public' }, async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(204).send('')
  }

  const widgetId = req.query.id
  if (!widgetId) {
    return res.status(400).json({ error: "Missing required 'id' URL parameter." })
  }

  let compiledSettings = {
    baseTheme: 'dark',
    layoutMode: 'elastic',
    defaultView: 'month',
    primaryColor: '#1e6b7b',
    accentColor: '#f0ad4e',
    eventBgColor: '#eef7f9',
    headerTextColor: '#ffffff',
    textColor: '#0f172a',
    fontFamily: 'sans-serif',
    maxWidth: '1100px',
    borderRadius: '6px',
    agendaLimit: 3,
  }

  try {
    const widgetDoc = await db.collection('widgets').doc(widgetId).get()
    if (!widgetDoc.exists) {
      return res.status(404).json({ error: 'Widget profile not found.' })
    }

    const rawWidgetData = widgetDoc.data()
    const widgetSettings = rawWidgetData.settings || rawWidgetData
    const ownerUid = rawWidgetData.ownerUid

    Object.assign(compiledSettings, {
      baseTheme: req.query.baseTheme || widgetSettings.baseTheme || 'dark',
      layoutMode: req.query.layoutMode || widgetSettings.layoutMode || 'elastic',
      defaultView: req.query.defaultView || widgetSettings.defaultView || 'month',
      primaryColor: req.query.primaryColor || widgetSettings.primaryColor || '#1e6b7b',
      accentColor: req.query.accentColor || widgetSettings.accentColor || '#f0ad4e',
      eventBgColor: req.query.eventBgColor || widgetSettings.eventBgColor || '#eef7f9',
      headerTextColor: req.query.headerTextColor || widgetSettings.headerTextColor || '#ffffff',
      textColor: req.query.textColor || widgetSettings.textColor || '#0f172a',
      fontFamily: req.query.fontFamily || widgetSettings.fontFamily || 'sans-serif',
      maxWidth: req.query.maxWidth || widgetSettings.maxWidth || '1100px',
      borderRadius: req.query.borderRadius || widgetSettings.borderRadius || '6px',
      agendaLimit: parseInt(req.query.agendaLimit || widgetSettings.agendaLimit || 3, 10),
    })

    const calendarId =
      req.query.calendarSourceEmail || rawWidgetData.calendarSourceEmail || 'primary'

    let activePlanTier = 'free'
    if (ownerUid) {
      const userDoc = await db.collection('users').doc(ownerUid).get()
      if (userDoc.exists) {
        activePlanTier = userDoc.data().planTier || 'free'
      }
    }

    const cacheKey = `${widgetId}_${calendarId}`
    const cachedData = apiCache.get(cacheKey)

    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION_MS) {
      res.set('Cache-Control', 'public, max-age=300, s-maxage=300')
      return res.json({
        source: 'cache',
        planTier: activePlanTier,
        settings: compiledSettings,
        events: cachedData.payload,
      })
    }

    let sanitizedEvents = []
    let oauth2Client = null
    let connectionDocRef = null
    let connectionData = null

    if (ownerUid) {
      const connectionSnapshot = await db
        .collection('connections')
        .where('ownerUid', '==', ownerUid)
        .where(
          'googleEmail',
          '==',
          calendarId === 'primary' ? rawWidgetData.calendarId : calendarId,
        )
        .limit(1)
        .get()

      if (!connectionSnapshot.empty) {
        connectionDocRef = connectionSnapshot.docs[0].ref
        connectionData = connectionSnapshot.docs[0].data()

        if (connectionData.refreshToken) {
          oauth2Client = new google.auth.OAuth2(
            '415247533936-e569avvi75k2kod4q9nbhecsqojts65n.apps.googleusercontent.com',
            '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',
          )
          oauth2Client.setCredentials({
            access_token: connectionData.accessToken,
            refresh_token: connectionData.refreshToken,
            expiry_date: connectionData.expiryDate,
          })
        }
      }
    }

    try {
      if (!oauth2Client && calendarId === 'primary') {
        throw new Error('No synchronized calendar connection found yet.')
      }

      let calendarOptions = { version: 'v3' }
      if (oauth2Client) {
        calendarOptions.auth = oauth2Client
      } else {
        calendarOptions.params = { key: 'AIzaSyDBjk0H7SnZlteOegJx7i7Ju3cXSsb1lbE' }
      }

      let calendar = google.calendar(calendarOptions)

      const timeMin = new Date()
      timeMin.setMonth(timeMin.getMonth() - 1)
      const timeMax = new Date()
      timeMax.setMonth(timeMax.getMonth() + 5)

      let googleResponse
      try {
        googleResponse = await calendar.events.list({
          calendarId: calendarId,
          timeMin: timeMin.toISOString(),
          timeMax: timeMax.toISOString(),
          singleEvents: true,
          orderBy: 'startTime',
        })
      } catch (apiError) {
        if (apiError.code === 401 && oauth2Client && connectionData?.refreshToken) {
          console.log('Access token expired. Refreshing token stream...')
          const { credentials } = await oauth2Client.refreshAccessToken()

          await connectionDocRef.update({
            accessToken: credentials.access_token,
            expiryDate: credentials.expiry_date || null,
            updatedAt: new Date().toISOString(),
          })

          oauth2Client.setCredentials(credentials)
          calendarOptions.auth = oauth2Client
          calendar = google.calendar(calendarOptions)

          googleResponse = await calendar.events.list({
            calendarId: calendarId,
            timeMin: timeMin.toISOString(),
            timeMax: timeMax.toISOString(),
            singleEvents: true,
            orderBy: 'startTime',
          })
        } else {
          throw apiError
        }
      }

      const rawEvents = googleResponse.data.items || []

      sanitizedEvents = rawEvents.map((event) => {
        const summaryText = event.summary || ''
        const isPrivate = summaryText.toLowerCase().includes('private')

        return {
          id: event.id,
          summary: isPrivate ? 'Private Booking' : summaryText,
          isPrivate: isPrivate,
          start: { dateTime: event.start?.dateTime || event.start?.date },
          end: { dateTime: event.end?.dateTime || event.end?.date },
        }
      })

      apiCache.set(cacheKey, {
        timestamp: Date.now(),
        payload: sanitizedEvents,
      })
    } catch (googleError) {
      console.warn('[Google API Warn] Dropping back to sandbox placeholders:', googleError.message)
      sanitizedEvents = [
        {
          id: 'mock_1',
          summary: '1-on-1 Strategy Consulting',
          start: { dateTime: '2026-06-16T10:00:00Z' },
          end: { dateTime: '2026-06-16T11:00:00Z' },
        },
        {
          id: 'mock_2',
          summary: 'Yoga Class Group Booking',
          start: { dateTime: '2026-06-17T14:00:00Z' },
          end: { dateTime: '2026-06-17T15:00:00Z' },
        },
        {
          id: 'mock_3',
          summary: 'Private Booking Blockout',
          isPrivate: true,
          start: { dateTime: '2026-06-18T09:00:00Z' },
          end: { dateTime: '2026-06-18T10:00:00Z' },
        },
      ]
    }

    res.set('Cache-Control', 'public, max-age=300, s-maxage=300')
    return res.json({
      source: oauth2Client ? 'live_oauth_api' : 'live_public_api_fallback',
      planTier: activePlanTier,
      settings: compiledSettings,
      events: sanitizedEvents,
    })
  } catch (error) {
    console.error('Fatal Core Malfunction:', error)
    return res.status(500).json({
      error: 'Failed to complete core dataset compilation.',
      details: error.message,
    })
  }
})

// ==========================================
// ENDPOINT 2: SECURE USER GOOGLE OAUTH EXCHANGE
// ==========================================
exports.exchangeAuthCodeForTokens = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Login required.')
  }

  const { code } = request.data
  if (!code) {
    throw new HttpsError('invalid-argument', 'Authorization code is required.')
  }

  const uid = request.auth.uid

  const oauth2Client = new google.auth.OAuth2(
    '415247533936-e569avvi75k2kod4q9nbhecsqojts65n.apps.googleusercontent.com',
    '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',
    'postmessage',
  )

  try {
    const { tokens } = await oauth2Client.getToken(code)
    oauth2Client.setCredentials(tokens)

    const userInfoResponse = await fetch(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${tokens.access_token}`,
    )

    if (!userInfoResponse.ok) {
      const errorText = await userInfoResponse.text()
      console.error('Google tokeninfo lookup failed:', errorText)
      throw new HttpsError('internal', `Google profile validation failed: ${errorText}`)
    }

    const userInfo = await userInfoResponse.json()
    const googleEmail = userInfo.email

    if (!googleEmail) {
      throw new HttpsError('failed-precondition', 'Could not retrieve Google email address.')
    }

    const connectionPayload = {
      ownerUid: uid,
      googleEmail: googleEmail,
      accessToken: tokens.access_token,
      expiryDate: tokens.expiry_date || null,
      updatedAt: new Date().toISOString(),
    }

    if (tokens.refresh_token) {
      connectionPayload.refreshToken = tokens.refresh_token
    }

    const connectionRef = db.collection('connections').doc(`${uid}_${googleEmail}`)
    await connectionRef.set(connectionPayload, { merge: true })

    return {
      success: true,
      email: googleEmail,
      message: 'Google Account successfully synchronized!',
    }
  } catch (error) {
    console.error('OAuth Exchange Failed:', error)
    throw new HttpsError('internal', `Failed to complete handshake: ${error.message}`)
  }
})

// ==========================================
// ENDPOINT 3: SECURE CALENDAR DISCONNECT
// ==========================================
exports.disconnectCalendar = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Login required.')
  }

  const { email } = request.data
  if (!email) {
    throw new HttpsError('invalid-argument', 'Target calendar email is required.')
  }

  const uid = request.auth.uid

  try {
    console.log(`Attempting to unlink calendar connection: ${uid}_${email}`)

    const connectionDoc = db.collection('connections').doc(`${uid}_${email}`)
    await connectionDoc.delete()

    return { success: true, message: 'Calendar account unlinked successfully.' }
  } catch (error) {
    console.error('Disconnect Failed:', error)
    throw new HttpsError('internal', `Failed to unlink connection: ${error.message}`)
  }
})

// ==========================================
// AUTOMATED WELCOME EMAIL TRIGGER & USER DOC CREATION
// ==========================================
exports.sendWelcomeEmail = functions.auth.user().onCreate(async (user) => {
  const userEmail = user.email
  if (!userEmail) return

  try {
    await db
      .collection('users')
      .doc(user.uid)
      .set(
        {
          uid: user.uid,
          email: userEmail,
          displayName: user.displayName || '',
          planTier: 'free',
          apiCount: 0,
          timezone: 'Europe/London',
          createdAt: new Date().toISOString(),
        },
        { merge: true },
      )

    const firstName = user.displayName ? user.displayName.split(' ')[0] : 'there'
    const personalizedHtml = welcomeHtml.replace('{{ name }}', firstName)

    await db.collection('mail').add({
      to: userEmail,
      message: {
        subject: 'Welcome to SeamlessCal !',
        html: personalizedHtml,
      },
    })
    console.log(`User created and welcome email queued for: ${userEmail}`)
  } catch (error) {
    console.error(`Failed signup initialization loop:`, error)
  }
})

// ==========================================
// AUTOMATED PRO UPGRADE RECEIPT
// ==========================================
exports.sendUpgradeEmail = onDocumentUpdated('users/{userId}', async (event) => {
  const newValue = event.data.after.data()
  const previousValue = event.data.before.data()

  if (previousValue?.planTier === 'free' && newValue?.planTier === 'pro') {
    const userEmail = newValue.email
    if (!userEmail) return

    try {
      await db.collection('mail').add({
        to: userEmail,
        message: {
          subject: 'SeamlessCal Pro Activated !',
          html: upgradeHtml,
        },
      })
      console.log(`Upgrade email queued for: ${userEmail}`)
    } catch (error) {
      console.error(`Failed to queue upgrade email:`, error)
    }
  }
})

// ==========================================
// ENDPOINT 4: PUBLIC CLIENT BOOKING ENGINE
// ==========================================
exports.createBooking = onRequest({ cors: true, invoker: 'public' }, async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(204).send('')
  }

  const { widgetId, clientName, clientEmail, meetingTime } = req.body

  if (!widgetId || !clientName || !clientEmail || !meetingTime) {
    return res.status(400).json({ error: 'Missing required booking fields.' })
  }

  try {
    const widgetDoc = await db.collection('widgets').doc(widgetId).get()
    if (!widgetDoc.exists) {
      return res.status(404).json({ error: 'Target widget configuration not found.' })
    }

    const widgetData = widgetDoc.data()
    const ownerUid = widgetData.ownerUid
    const hostCalendarId = widgetData.calendarId || 'primary'

    if (!ownerUid) {
      return res.status(400).json({ error: 'Widget missing verified owner mapping.' })
    }

    let activePlanTier = 'free'
    const userDoc = await db.collection('users').doc(ownerUid).get()
    if (userDoc.exists) {
      activePlanTier = userDoc.data().planTier || 'free'
    }

    if (activePlanTier === 'free') {
      return res.status(403).json({
        error: 'Booking functionality paused.',
        code: 'PLAN_TIER_LIMIT',
        details: 'The organizer of this calendar is currently using the view-only tier.',
      })
    }

    const bookingMode = widgetData.bookingMode || 'auto'
    const bookingId = db.collection('bookings').doc().id
    const newBookingPayload = {
      id: bookingId,
      widgetId: widgetId,
      ownerUid: ownerUid,
      clientName: clientName,
      clientEmail: clientEmail,
      meetingTime: meetingTime,
      status: bookingMode === 'auto' ? 'confirmed' : 'pending',
      declineReason: '',
      createdAt: new Date().toISOString(),
    }

    if (bookingMode === 'auto') {
      const connectionSnapshot = await db
        .collection('connections')
        .where('ownerUid', '==', ownerUid)
        .where('googleEmail', '==', hostCalendarId)
        .limit(1)
        .get()

      if (!connectionSnapshot.empty) {
        const connectionData = connectionSnapshot.docs[0].data()

        const oauth2Client = new google.auth.OAuth2(
          '415247533936-e569avvi75k2kod4q9nbhecsqojts65n.apps.googleusercontent.com',
          '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',
        )
        oauth2Client.setCredentials({
          access_token: connectionData.accessToken,
          refresh_token: connectionData.refreshToken,
        })

        const calendar = google.calendar({ version: 'v3', auth: oauth2Client })
        const startTime = new Date(meetingTime)
        const endTime = new Date(startTime.getTime() + 30 * 60 * 1000)

        await calendar.events.insert({
          calendarId: hostCalendarId,
          requestBody: {
            summary: `SeamlessCal - ${clientName}`,
            description: `Appointment booked by ${clientName} (${clientEmail}) via public widget profile.`,
            start: { dateTime: startTime.toISOString() },
            end: { dateTime: endTime.toISOString() },
            attendees: [{ email: clientEmail }],
          },
        })
      }

      const readableDate = new Date(meetingTime).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      })

      let personalizedHtml = bookingHtml
        .replace('{{ clientName }}', clientName)
        .replace('{{ meetingTime }}', readableDate)
        .replace('{{ hostEmail }}', hostCalendarId)

      if (personalizedHtml.includes('{{ hostName }}')) {
        personalizedHtml = personalizedHtml.replace(
          '{{ hostName }}',
          widgetData.widgetName || 'Your Host',
        )
      } else if (personalizedHtml.includes('{{ name }}')) {
        personalizedHtml = personalizedHtml.replace(
          '{{ name }}',
          widgetData.widgetName || 'Your Host',
        )
      }

      await db.collection('mail').add({
        to: clientEmail,
        message: { subject: 'Appointment Confirmed! 🗓️', html: personalizedHtml },
      })
    }

    await db.collection('bookings').doc(bookingId).set(newBookingPayload)

    return res.json({
      success: true,
      bookingId: bookingId,
      status: newBookingPayload.status,
      message: 'Booking processed successfully!',
    })
  } catch (error) {
    console.error('Booking Processing Crash:', error)
    return res
      .status(500)
      .json({ error: 'Failed to process calendar request.', details: error.message })
  }
})

// ==========================================
// ENDPOINT 5: SECURE BOOKING DECISION CONTROLLER
// ==========================================
exports.updateBookingStatus = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Login required.')
  }

  const { bookingId, status, reason, sendNoteToClient } = request.data
  const uid = request.auth.uid

  if (!bookingId || !['penciled-in', 'confirmed', 'declined'].includes(status)) {
    throw new HttpsError(
      'invalid-argument',
      'Missing booking ID or invalid target status parameters.',
    )
  }

  try {
    const bookingDocRef = db.collection('bookings').doc(bookingId)
    const bookingSnap = await bookingDocRef.get()

    if (!bookingSnap.exists) {
      throw new HttpsError('not-found', 'Booking record does not exist.')
    }

    const bookingData = bookingSnap.data()

    if (bookingData.ownerUid !== uid) {
      throw new HttpsError('permission-denied', 'Administrative clearance required.')
    }

    const readableDate = new Date(bookingData.meetingTime).toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    })

    const widgetDoc = await db.collection('widgets').doc(bookingData.widgetId).get()
    const widgetData = widgetDoc?.data() || {}
    const hostName = widgetData.widgetName || 'Your Host'

    if (status === 'penciled-in') {
      let noteToClient =
        reason && reason.trim() !== ''
          ? `Message from organizer: "${reason}"`
          : 'Please review payment details and documentation requirements to complete hold authorization.'

      await db.collection('mail').add({
        to: bookingData.clientEmail,
        message: {
          subject: 'Action Required: Appointment is Penciled In! ⏳',
          text: `Hi ${bookingData.clientName},\n\nAppointment request for ${readableDate} provisionally penciled in.\n\nComplete required deposit payment or document signature actions to lock in slot.\n\n${noteToClient}\n\nBest regards,\n${hostName} Management Team`,
        },
      })
    }

    if (status === 'confirmed') {
      const hostCalendarId = widgetData.calendarSourceEmail || 'primary'

      const connectionSnapshot = await db
        .collection('connections')
        .where('ownerUid', '==', uid)
        .where('googleEmail', '==', hostCalendarId)
        .limit(1)
        .get()

      if (!connectionSnapshot.empty) {
        const connectionData = connectionSnapshot.docs[0].data()

        const oauth2Client = new google.auth.OAuth2(
          '415247533936-e569avvi75k2kod4q9nbhecsqojts65n.apps.googleusercontent.com',
          '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',
        )
        oauth2Client.setCredentials({
          access_token: connectionData.accessToken,
          refresh_token: connectionData.refreshToken,
        })

        const calendar = google.calendar({ version: 'v3', auth: oauth2Client })
        const startTime = new Date(bookingData.meetingTime)
        const endTime = new Date(startTime.getTime() + 30 * 60 * 1000)

        let eventDescription = `Appointment manually approved by host via dashboard portal.`
        if (bookingData.clientMessage)
          eventDescription += `\n\nClient Note: "${bookingData.clientMessage}"`
        if (reason && reason.trim() !== '')
          eventDescription += `\n\nOrganizer Response Note: "${reason}"`

        await calendar.events.insert({
          calendarId: hostCalendarId,
          requestBody: {
            summary: `SeamlessCal - ${bookingData.clientName}`,
            description: eventDescription,
            start: { dateTime: startTime.toISOString() },
            end: { dateTime: endTime.toISOString() },
            attendees: [{ email: bookingData.clientEmail }],
          },
        })
      }

      let noteBlock =
        sendNoteToClient && reason && reason.trim() !== ''
          ? `<div style="margin-top:15px; padding:12px; background:#f0fdf4; border-left:4px solid #16a34a; font-style:italic; color:#166534;"><strong>Message from host:</strong> "${reason}"</div>`
          : ''

      let personalizedHtml = bookingHtml
        .replace('{{ clientName }}', bookingData.clientName)
        .replace('{{ meetingTime }}', readableDate)
        .replace('{{ hostEmail }}', hostCalendarId)

      if (personalizedHtml.includes('{{ hostName }}')) {
        personalizedHtml = personalizedHtml.replace('{{ hostName }}', hostName)
      } else if (personalizedHtml.includes('{{ name }}')) {
        personalizedHtml = personalizedHtml.replace('{{ name }}', hostName)
      }

      if (personalizedHtml.includes('<div id="organizer-notes-outlet"></div>')) {
        personalizedHtml = personalizedHtml.replace(
          '<div id="organizer-notes-outlet"></div>',
          noteBlock,
        )
      }

      await db.collection('mail').add({
        to: bookingData.clientEmail,
        message: {
          subject: 'Appointment Request Approved! 🗓️',
          html: personalizedHtml,
        },
      })
    }

    if (status === 'declined') {
      const noteToClient =
        sendNoteToClient && reason && reason.trim() !== ''
          ? `Reason provided by organizer: "${reason}"`
          : 'No further details provided by organizer.'

      await db.collection('mail').add({
        to: bookingData.clientEmail,
        message: {
          subject: 'Update: Appointment Request Declined',
          text: `Hi ${bookingData.clientName},\n\nAppointment request for ${readableDate} could not be accepted.\n\n${noteToClient}\n\nBest regards,\n${hostName} Management Team`,
        },
      })
    }

    await bookingDocRef.update({
      status: status,
      hostFeedback: reason || '',
      updatedAt: new Date().toISOString(),
    })

    return { success: true, nextStatus: status }
  } catch (error) {
    console.error('Decision Loop Process Malfunction:', error)
    throw new HttpsError(
      'internal',
      `Failed executing booking status modification: ${error.message}`,
    )
  }
})

// ==========================================
// STRIPE BILLING EXTENSIONS (PHASE 2)
// ==========================================

// TOUCHPOINT A: CHECKOUT CREATION ENGINE
exports.createCheckoutSession = onCall({ secrets: [stripeSecretKey] }, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Login required.')
  }

  const stripe = require('stripe')(stripeSecretKey.value())

  const uid = request.auth.uid
  const priceId = 'price_1TrF4wHG2IY2xZ2KsgQnTkgh'

  try {
    const userDocRef = db.collection('users').doc(uid)
    const userSnap = await userDocRef.get()
    const userData = userSnap.data() || {}

    let customerId = userData.stripeCustomerId

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: request.auth.token.email,
        metadata: { firebaseUid: uid },
      })
      customerId = customer.id
      await userDocRef.update({ stripeCustomerId: customerId })
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'http://localhost:5173/dashboard/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:5173/dashboard/upgrade',
    })

    return { url: session.url }
  } catch (error) {
    throw new HttpsError('internal', error.message)
  }
})

// TOUCHPOINT B: CUSTOMER SELF-SERVICE PORTAL
exports.createBillingPortal = onCall({ secrets: [stripeSecretKey] }, async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Login required.')
  }

  const stripe = require('stripe')(stripeSecretKey.value())
  const uid = request.auth.uid

  try {
    const userSnap = await db.collection('users').doc(uid).get()
    const customerId = userSnap.data()?.stripeCustomerId

    if (!customerId) {
      throw new HttpsError('failed-precondition', 'Stripe identity record not found.')
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: 'https://seamlesscal.com/dashboard/settings',
    })

    return { url: portalSession.url }
  } catch (error) {
    throw new HttpsError('internal', error.message)
  }
})

// TOUCHPOINT C: LIVE PAYMENT WEBHOOK LISTENER
exports.handleStripeWebhook = onRequest(
  { secrets: [stripeWebhookSecret, stripeSecretKey] },
  async (req, res) => {
    // Pass the real secret key variable context into the instance constructor
    const stripe = require('stripe')(stripeSecretKey.value())
    const sig = req.headers['stripe-signature']
    let event

    try {
      event = stripe.webhooks.constructEvent(req.rawBody, sig, stripeWebhookSecret.value())
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    const subscription = event.data.object
    const customerId = subscription.customer
    let planTier = 'free'

    if (['active', 'trialing'].includes(subscription.status)) {
      planTier = 'pro'
    }

    try {
      const userSnapshot = await db
        .collection('users')
        .where('stripeCustomerId', '==', customerId)
        .limit(1)
        .get()

      if (!userSnapshot.empty) {
        const userDocRef = userSnapshot.docs[0].ref
        await userDocRef.update({
          planTier: planTier,
          updatedAt: new Date().toISOString(),
        })
      }

      return res.json({ received: true })
    } catch (error) {
      return res.status(500).send(`Database Sync Malfunction: ${error.message}`)
    }
  },
)
