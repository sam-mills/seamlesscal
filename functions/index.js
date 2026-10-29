const { onRequest, onCall, HttpsError } = require('firebase-functions/v2/https')
const { onDocumentUpdated } = require('firebase-functions/v2/firestore')
const { getFirestore } = require('firebase-admin/firestore')
const { initializeApp } = require('firebase-admin/app')
const { google } = require('googleapis')
const { defineSecret } = require('firebase-functions/params')
const admin = require('firebase-admin')

const functions = require('firebase-functions/v1')

// Define secrets at the top level
const stripeSecretKey = defineSecret('STRIPE_SECRET_KEY')
const stripeWebhookSecret = defineSecret('STRIPE_WEBHOOK_SECRET')
const googleApiKey = defineSecret('GOOGLE_API_KEY')

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
exports.getWidgetCalendar = onRequest(
  { cors: true, invoker: 'public', secrets: [googleApiKey] },
  async (req, res) => {
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
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
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
          calendarOptions.params = { key: googleApiKey.value() }
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
        console.warn(
          '[Google API Warn] Dropping back to sandbox placeholders:',
          googleError.message,
        )
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
  },
)

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
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(clientEmail.trim())) {
    return res.status(400).json({ error: 'Invalid client email format context.' })
  }

  if (clientName.length > 70) {
    return res.status(400).json({ error: 'Payload fields exceed safety text parameters.' })
  }

  try {
    const widgetDoc = await db.collection('widgets').doc(widgetId).get()
    if (!widgetDoc.exists) {
      return res.status(404).json({ error: 'Target widget configuration not found.' })
    }

    const widgetData = widgetDoc.data()
    const ownerUid = widgetData.ownerUid
    const hostCalendarId = widgetData.calendarId || 'primary'
    const hostName = widgetData.widgetName || 'Your Host'

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
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      meetingTime: meetingTime,
      status: bookingMode === 'auto' ? 'confirmed' : 'pending',
      declineReason: '',
      interactionLog: [],
      createdAt: new Date().toISOString(),
    }

    if (bookingMode === 'auto') {
      const connectionSnapshot = await db
        .collection('connections')
        .where('ownerUid', '==', ownerUid)
        .where('googleEmail', '==', hostCalendarId)
        .limit(1)
        .get()

      const readableDate = new Date(meetingTime).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      })

      if (!connectionSnapshot.empty) {
        const connectionData = connectionSnapshot.docs[0].data()

        const oauth2Client = new google.auth.OAuth2(
          process.env.GOOGLE_CLIENT_ID,
          process.env.GOOGLE_CLIENT_SECRET,
          process.env.GOOGLE_REDIRECT_URI
        );
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

      let personalizedHtml = bookingHtml
        .replace('{{ clientName }}', clientName)
        .replace('{{ meetingTime }}', readableDate)
        .replace('{{ hostEmail }}', hostCalendarId)

      if (personalizedHtml.includes('{{ hostName }}')) {
        personalizedHtml = personalizedHtml.replace('{{ hostName }}', hostName)
      } else if (personalizedHtml.includes('{{ name }}')) {
        personalizedHtml = personalizedHtml.replace('{{ name }}', hostName)
      }

      newBookingPayload.interactionLog.push({
        logId: `log_init_${Date.now()}`,
        actionType: 'confirmed_receipt',
        messageBody: `Appointment auto-confirmed instantly by core scheduler mapping.`,
        timestamp: new Date().toISOString(),
      })

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

  const { bookingId, status, reason, sendNoteToClient, customFormUrl } = request.data
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

    const nowIso = new Date().toISOString()
    const readableDate = new Date(bookingData.meetingTime).toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    })

    const widgetDoc = await db.collection('widgets').doc(bookingData.widgetId).get()
    const widgetData = widgetDoc?.data() || {}
    const hostName = widgetData.widgetName || 'Your Host'

    let logActionType = 'manual_note'
    if (status === 'penciled-in') logActionType = 'penciled_in_offer'
    if (status === 'confirmed') logActionType = 'confirmed_receipt'

    const historyPayloadMessage =
      reason && reason.trim().length > 0 ? reason : `Booking state shifted manually to ${status}.`

    const newHistoryLog = {
      logId: `log_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`,
      actionType: logActionType,
      messageBody: historyPayloadMessage,
      timestamp: nowIso,
    }

    let payloadUpdatePayload = {
      status: status,
      hostFeedback: reason || '',
      updatedAt: nowIso,
      interactionLog: admin.firestore.FieldValue.arrayUnion(newHistoryLog),
    }

    if (status === 'penciled-in') {
      payloadUpdatePayload.penciledInAt = nowIso

      if (customFormUrl && customFormUrl.trim() !== '') {
        payloadUpdatePayload.customFormUrl = customFormUrl.trim()
      }

      // 🚀 AUTOMATED PRE-FILLED LINK BUILDER PIPELINE
      let publicWaiverFormUrl = customFormUrl || bookingData.customFormUrl || ''

      if (publicWaiverFormUrl) {
        const urlJoinToken = publicWaiverFormUrl.includes('?') ? '&' : '?'
        if (bookingData.googleFormEntryId) {
          publicWaiverFormUrl = `${publicWaiverFormUrl}${urlJoinToken}${bookingData.googleFormEntryId}=${bookingId}`
        }
      }

      let noteToClient = ''
      if (publicWaiverFormUrl && publicWaiverFormUrl.trim() !== '') {
        noteToClient =
          reason && reason.trim() !== ''
            ? `Message from organizer: "${reason}"\n\nPlease review and sign your custom venue hire paperwork here: ${publicWaiverFormUrl}`
            : `Please review and sign your custom venue hire paperwork via this link to lock in your booking: ${publicWaiverFormUrl}`
      } else {
        noteToClient =
          reason && reason.trim() !== ''
            ? `Message from organizer: "${reason}"`
            : 'Please review payment details and coordinate documentation requirements with the organizer to complete hold authorization.'
      }

      await db.collection('mail').add({
        to: bookingData.clientEmail,
        message: {
          subject: 'Action Required: Appointment is Penciled In! ⏳',
          text: `Hi ${bookingData.clientName},\n\nAppointment request for ${readableDate} provisionally penciled in.\n\nComplete required deposit payment or document signature actions to lock in your slot.\n\n${noteToClient}\n\nBest regards,\n${hostName} Management Team`,
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
          process.env.GOOGLE_CLIENT_ID,
          process.env.GOOGLE_CLIENT_SECRET,
          process.env.GOOGLE_REDIRECT_URI
        );
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
      if (personalizedHtml.includes('{{ hostName }}'))
        personalizedHtml = personalizedHtml.replace('{{ hostName }}', hostName)
      if (personalizedHtml.includes('<div id="organizer-notes-outlet"></div>'))
        personalizedHtml = personalizedHtml.replace(
          '<div id="organizer-notes-outlet"></div>',
          noteBlock,
        )
      await db.collection('mail').add({
        to: bookingData.clientEmail,
        message: { subject: 'Appointment Request Approved! 🗓️', html: personalizedHtml },
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

    await bookingDocRef.update(payloadUpdatePayload)
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
// ENDPOINT 6: CHASE REMINDER CLIENT NUDGE MODULE
// ==========================================
exports.sendClientNudgeReminder = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Login required.')
  }

  const { bookingId } = request.data
  const uid = request.auth.uid

  if (!bookingId) {
    throw new HttpsError('invalid-argument', 'Booking ID is required to transmit client nudges.')
  }

  try {
    const bookingDocRef = db.collection('bookings').doc(bookingId)
    const bookingSnap = await bookingDocRef.get()

    if (!bookingSnap.exists) {
      throw new HttpsError('not-found', 'Booking asset reference missing.')
    }

    const bookingData = bookingSnap.data()

    if (bookingData.ownerUid !== uid) {
      throw new HttpsError('permission-denied', 'Ownership verification failed.')
    }

    const nowIso = new Date().toISOString()
    const readableDate = new Date(bookingData.meetingTime).toLocaleString('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    })

    const widgetDoc = await db.collection('widgets').doc(bookingData.widgetId).get()
    const widgetData = widgetDoc?.data() || {}
    const hostName = widgetData.widgetName || 'Your Host'

    const nudgeMessageText = `Hi ${bookingData.clientName},\n\nThis is a friendly reminder that your booking request for ${readableDate} is currently held on our queue pending confirmation steps.\n\nPlease follow the guidelines previously sent by the organizer to lock in your slot. Let us know if you have any questions!\n\nBest regards,\n${hostName} Management Team`

    const newNudgeLog = {
      logId: `log_nudge_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`,
      actionType: 'nudge',
      messageBody: `Automated chase reminder nudge notification dispatched.`,
      timestamp: nowIso,
    }

    await bookingDocRef.update({
      updatedAt: nowIso,
      interactionLog: admin.firestore.FieldValue.arrayUnion(newNudgeLog),
    })

    await db.collection('mail').add({
      to: bookingData.clientEmail,
      message: {
        subject: 'Reminder: Complete your booking hold with ' + hostName + ' ⏳',
        text: nudgeMessageText,
      },
    })

    return { success: true, timestamp: nowIso }
  } catch (error) {
    console.error('Nudge execution lifecycle crash:', error)
    throw new HttpsError('internal', `Failed to deliver chase notification: ${error.message}`)
  }
})

// ==========================================
// STRIPE BILLING EXTENSIONS (PHASE 2)
// ==========================================

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

exports.handleStripeWebhook = onRequest(
  { secrets: [stripeWebhookSecret, stripeSecretKey] },
  async (req, res) => {
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

// ==========================================
// ENDPOINT 7: PUBLIC DYNAMIC FREE/BUSY AVAILABILITY ENGINE
// ==========================================
exports.getFreeBusySlots = onRequest({ cors: true, invoker: 'public' }, async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(204).send('')
  }

  const { widgetId, date } = req.query

  if (!widgetId || !date) {
    return res.status(400).json({ error: "Missing required 'widgetId' or 'date' parameters." })
  }

  try {
    const widgetDoc = await db.collection('widgets').doc(widgetId).get()
    if (!widgetDoc.exists) {
      return res.status(404).json({ error: 'Widget profile mapping missing.' })
    }

    const widgetData = widgetDoc.data()
    const ownerUid = widgetData.ownerUid
    const hostCalendarId = widgetData.calendarSourceEmail || widgetData.calendarId || 'primary'

    if (!ownerUid) {
      return res.status(400).json({ error: 'Widget is missing a verified owner mapping.' })
    }

    const lookupEmail = hostCalendarId === 'primary' ? widgetData.calendarId : hostCalendarId

    const connectionSnapshot = await db
      .collection('connections')
      .where('ownerUid', '==', ownerUid)
      .where('googleEmail', '==', lookupEmail)
      .limit(1)
      .get()

    if (connectionSnapshot.empty) {
      return res.json({ busySlots: [] })
    }

    const connectionDocRef = connectionSnapshot.docs[0].ref
    const connectionData = connectionSnapshot.docs[0].data()

    const oauth2Client = new google.auth.OAuth2(
          process.env.GOOGLE_CLIENT_ID,
          process.env.GOOGLE_CLIENT_SECRET,
          process.env.GOOGLE_REDIRECT_URI
        );

    oauth2Client.setCredentials({
      access_token: connectionData.accessToken,
      refresh_token: connectionData.refreshToken,
      expiry_date: connectionData.expiryDate,
    })

    let calendar = google.calendar({ version: 'v3', auth: oauth2Client })

    const timeMin = new Date(`${date}T00:00:00.000Z`)
    const timeMax = new Date(`${date}T23:59:59.999Z`)

    let freeBusyResponse
    try {
      freeBusyResponse = await calendar.freebusy.query({
        requestBody: {
          timeMin: timeMin.toISOString(),
          timeMax: timeMax.toISOString(),
          items: [{ id: lookupEmail }],
        },
      })
    } catch (apiError) {
      if (apiError.code === 401 && connectionData.refreshToken) {
        console.log('[FreeBusy Engine] Access token expired. Triggering hot refresh loop...')
        const { credentials } = await oauth2Client.refreshAccessToken()

        await connectionDocRef.update({
          accessToken: credentials.access_token,
          expiryDate: credentials.expiry_date || null,
          updatedAt: new Date().toISOString(),
        })

        oauth2Client.setCredentials(credentials)
        calendar = google.calendar({ version: 'v3', auth: oauth2Client })

        freeBusyResponse = await calendar.freebusy.query({
          requestBody: {
            timeMin: timeMin.toISOString(),
            timeMax: timeMax.toISOString(),
            items: [{ id: lookupEmail }],
          },
        })
      } else {
        throw apiError
      }
    }

    const busySlots = freeBusyResponse.data.calendars[lookupEmail]?.busy || []

    return res.json({
      success: true,
      date: date,
      busySlots: busySlots,
    })
  } catch (error) {
    console.error('Availability Query Core Malfunction:', error)
    return res.status(500).json({
      error: 'Failed to cross-reference scheduling slot metrics.',
      details: error.message,
    })
  }
})

// ==========================================================
// ENDPOINT 8: SECURE GOOGLE FORMS API AUDITOR (NO SPREADSHEETS)
// ==========================================================
exports.verifyFormSignatureViaAPI = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Login required.')
  }

  const { bookingId } = request.data
  if (!bookingId) {
    throw new HttpsError('invalid-argument', 'Missing booking identification token.')
  }

  try {
    const bookingDoc = await db.collection('bookings').doc(bookingId).get()
    if (!bookingDoc.exists) {
      throw new HttpsError('not-found', 'Booking item not found.')
    }
    const bookingData = bookingDoc.data()

    const formUrl = bookingData.customFormUrl
    if (!formUrl) {
      return { verified: false, error: 'No custom form URL has been saved to this booking.' }
    }

    // 🚀 UNIVERSAL REGEX PARSER: Extracts Form ID correctly from both creator /edit links and public /e/.../viewform links
    const matches = formUrl.match(/\/forms\/d\/(?:e\/)?([a-zA-Z0-9-_]+)/)
    if (!matches || !matches[1]) {
      return {
        verified: false,
        error: 'Could not resolve a valid Google Form ID from the provided link structure.',
      }
    }
    const formId = matches[1]

    // Grab the host's OAuth tokens to look at the form responses securely
    const hostCalendarId = bookingData.calendarSourceEmail || bookingData.calendarId || 'primary'

    // 🚀 DEFENSIVE FALLBACK PIPELINE: Ensure lookupEmail is never undefined before hitting Firestore query constraints
    let lookupEmail = hostCalendarId === 'primary' ? bookingData.calendarId : hostCalendarId

    if (!lookupEmail || lookupEmail === 'primary') {
      // Fallback 1: Query parent widget profile details configuration mapping
      const widgetDoc = await db.collection('widgets').doc(bookingData.widgetId).get()
      const widgetData = widgetDoc.exists ? widgetDoc.data() : {}
      lookupEmail = widgetData.calendarSourceEmail || widgetData.calendarId
    }

    if (!lookupEmail) {
      // Fallback 2: Fall back cleanly to checking user record profile identifiers
      const userDoc = await db.collection('users').doc(bookingData.ownerUid).get()
      lookupEmail = userDoc.exists ? userDoc.data().email : null
    }

    if (!lookupEmail) {
      throw new HttpsError(
        'failed-precondition',
        'Could not automatically isolate a verified external Google account profile to evaluate connection tokens.',
      )
    }

    const connectionSnapshot = await db
      .collection('connections')
      .where('ownerUid', '==', bookingData.ownerUid)
      .where('googleEmail', '==', lookupEmail)
      .limit(1)
      .get()

    if (connectionSnapshot.empty) {
      throw new HttpsError(
        'failed-precondition',
        `No synchronized Google connection credentials found for this host profile (${lookupEmail}).`,
      )
    }

    const connectionDocRef = connectionSnapshot.docs[0].ref
    const connectionData = connectionSnapshot.docs[0].data()

 const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

    oauth2Client.setCredentials({
      access_token: connectionData.accessToken,
      refresh_token: connectionData.refreshToken,
      expiry_date: connectionData.expiryDate,
    })

    let formsClient = google.forms({ version: 'v1', auth: oauth2Client })
    let response

    try {
      response = await formsClient.forms.responses.list({ formId })
    } catch (apiError) {
      // Hot token refresh handling if their session expired
      if (apiError.code === 401 && connectionData.refreshToken) {
        const { credentials } = await oauth2Client.refreshAccessToken()
        await connectionDocRef.update({
          accessToken: credentials.access_token,
          expiryDate: credentials.expiry_date || null,
          updatedAt: new Date().toISOString(),
        })
        oauth2Client.setCredentials(credentials)
        formsClient = google.forms({ version: 'v1', auth: oauth2Client })
        response = await formsClient.forms.responses.list({ formId })
      } else {
        throw apiError
      }
    }

    const submissions = response.data.responses || []
    const targetEmail = bookingData.clientEmail?.toLowerCase().trim()
    const targetName = bookingData.clientName?.toLowerCase().trim()

    // 🚀 CHRONOLOGICAL SEQUENCE ALIGNMENT ENGINE:
    // To handle repeat clients safely across variable global locales without date format crashes,
    // we match up database indexes by mapping them to submission iteration counts.
    const existingBookingsSnapshot = await db
      .collection('bookings')
      .where('ownerUid', '==', bookingData.ownerUid)
      .where('clientEmail', '==', bookingData.clientEmail)
      .where('termsSigned', '==', true)
      .get()

    // If they have 2 signed bookings, we need to find at least the 3rd matching form response slot
    const requiredMatchOccurrence = existingBookingsSnapshot.size + 1
    let matchCount = 0
    let foundMatch = false

    // Scan the form responses directly for a matching name or email address
    for (const sub of submissions) {
      let subMatchesClient = false

      if (sub.respondentEmail && sub.respondentEmail.toLowerCase().trim() === targetEmail) {
        subMatchesClient = true
      } else {
        const answers = Object.values(sub.answers || {})
        for (const answer of answers) {
          if (answer.textAnswers && answer.textAnswers.answers) {
            const matchedInput = answer.textAnswers.answers.some((val) => {
              const rawVal = val.value?.toLowerCase().trim() || ''
              return rawVal === targetEmail || rawVal === targetName
            })

            if (matchedInput) {
              subMatchesClient = true
              break
            }
          }
        }
      }

      if (subMatchesClient) {
        matchCount++
        if (matchCount >= requiredMatchOccurrence) {
          foundMatch = true
          break
        }
      }
    }

    if (foundMatch) {
      await db.collection('bookings').doc(bookingId).update({
        termsSigned: true,
        updatedAt: new Date().toISOString(),
      })
    }

    return { verified: foundMatch }
  } catch (error) {
    console.error('Forms API handshake error loop:', error)
    throw new HttpsError('internal', `Forms API verification failed: ${error.message}`)
  }
})
// ==========================================================
// ENDPOINT 9: SECURE HOST CONNECTIONS FETCH UTILITY
// ==========================================
exports.getHostConnections = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Login required.')
  }

  const uid = request.auth.uid

  try {
    const connectionsSnapshot = await db
      .collection('connections')
      .where('ownerUid', '==', uid)
      .get()

    const accounts = []
    connectionsSnapshot.forEach((doc) => {
      const data = doc.data()
      accounts.push({
        id: doc.id,
        email: data.googleEmail || data.email,
      })
    })

    return { accounts }
  } catch (error) {
    console.error('Failed to retrieve host connection records:', error)
    throw new HttpsError('internal', `Failed to load connection states: ${error.message}`)
  }
})
