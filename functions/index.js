const { onRequest } = require('firebase-functions/v2/https')
const { getFirestore } = require('firebase-admin/firestore')
const { initializeApp } = require('firebase-admin/app')
const { google } = require('googleapis')

// Initialize the Admin SDK to allow internal, secure Firestore access
initializeApp()
const db = getFirestore()

// High-speed, cloud-side memory caching map to prevent hitting Google Rate Limits
const apiCache = new Map()
const CACHE_DURATION_MS = 5 * 60 * 1000 // 5-minute global cache window

exports.getWidgetCalendar = onRequest({ cors: true, invoker: 'public' }, async (req, res) => {
  const widgetId = req.query.id

  if (!widgetId) {
    return res.status(400).json({ error: "Missing required 'id' URL parameter." })
  }

  try {
    // 1. LOOKUP TENANT WIDGET SETTINGS WITH DEV EMULATOR FALLBACK
    let widgetData = null
    const widgetDoc = await db.collection('widgets').doc(widgetId).get()

    if (widgetDoc.exists) {
      widgetData = widgetDoc.data()
    } else {
      // =======================================================
      // LOCAL SANDBOX DEV FALLBACK
      // =======================================================
      // If the local emulator wipes its database memory, this prevents a 404 block!
      console.log(
        `[Dev Notice] Profile "${widgetId}" not found in Firestore. Injecting sandbox fallback settings.`,
      )

      widgetData = {
        primaryColor: '#003366',
        accentColor: '#D4AF37',
        fontFamily: 'sans-serif',
        calendarId: 'apsleycc@gmail.com',
        layoutMode: 'elastic', // 💡 Toggle manually to 'grid' to force check layout matrix variations!
      }
    }

    const calendarId = widgetData.calendarId || 'primary'

    // 2. CHECK INTERNAL CLOUD MEMORY CACHE
    const cacheKey = `${widgetId}_${calendarId}`
    const cachedData = apiCache.get(cacheKey)

    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION_MS) {
      return res.json({
        source: 'cache',
        settings: widgetData,
        events: cachedData.payload,
      })
    }

    // 3. SECURE GOOGLE CALENDAR CONNECTION
    const API_KEY = 'AIzaSyDBjk0H7SnZlteOegJx7i7Ju3cXSsb1lbE'
    const calendar = google.calendar({ version: 'v3', auth: API_KEY })

    // Set time boundaries to optimize payload size (Fetch 1 month past through 5 months forward)
    const timeMin = new Date()
    timeMin.setMonth(timeMin.getMonth() - 1)
    const timeMax = new Date()
    timeMax.setMonth(timeMax.getMonth() + 5)

    const googleResponse = await calendar.events.list({
      calendarId: calendarId,
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    })

    const rawEvents = googleResponse.data.items || []

    // 4. THE AUTOMATED SANITIZATION PIPELINE
    const sanitizedEvents = rawEvents.map((event) => {
      const summaryText = event.summary || ''
      const isPrivate = summaryText.toLowerCase().includes('private')

      return {
        id: event.id,
        summary: isPrivate ? 'Private Booking' : summaryText,
        description: isPrivate ? '' : event.description || '',
        isPrivate: isPrivate,
        start: {
          dateTime: event.start?.dateTime || event.start?.date,
          isAllDay: !event.start?.dateTime,
        },
        end: {
          dateTime: event.end?.dateTime || event.end?.date,
        },
      }
    })

    // Save newly grabbed sanitized data array straight into our fast-lookup cache layer
    apiCache.set(cacheKey, {
      timestamp: Date.now(),
      payload: sanitizedEvents,
    })

    // 5. SEND SHIELDED RESPONSES TO THE DOM CLIENT
    return res.json({
      source: 'live_api_with_fallback',
      settings: widgetData,
      events: sanitizedEvents,
    })
  } catch (error) {
    console.error('Middleware processing malfunction:', error)
    return res.status(500).json({
      error: 'Failed to fetch calendar stream.',
      details: error.message,
    })
  }
})
