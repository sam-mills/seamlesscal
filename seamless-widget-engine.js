// 1. INJECT THE SAAS STYLESHEET AUTOMATICALLY INTO THE CUSTOMER'S HEAD
const cssStyles = `
  :root { --calendar-primary: #1e6b7b; --calendar-accent: #f0ad4e; }
  .cal-controls { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
  .cal-controls h2 { margin: 0; font-size: 24px; font-weight: 700; color: #1a1a1a; }
  .nav-btn { background-color: var(--calendar-accent); color: #ffffff; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 700; font-size: 14px; cursor: pointer; }
  .cal-weekday-header { display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; font-weight: 700; font-size: 14px; background-color: var(--calendar-primary); color: #ffffff; padding: 12px 0; }
  .month-grid { display: grid; grid-template-columns: repeat(7, 1fr); border-left: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; }
  .day-slot { border-right: 1px solid #e0e0e0; border-top: 1px solid #e0e0e0; padding: 10px; display: flex; flex-direction: column; background-color: #ffffff; box-sizing: border-box; position: relative; }
  .day-slot.empty { background-color: #fafafa; pointer-events: none; }
  .day-num { font-size: 13px; font-weight: 600; color: var(--calendar-accent); margin-bottom: 8px; }
  .day-events-container { display: flex; flex-direction: column; gap: 6px; flex-grow: 1; }
  .day-event { background-color: #eef7f9; color: #2c3e50; border-left: 4px solid var(--calendar-primary); border-radius: 0 4px 4px 0; padding: 6px 8px; display: flex; flex-direction: column; line-height: 1.3; font-size: 11px; }
  .event-time-tag { font-size: 10px; font-weight: 700; color: var(--calendar-primary); margin-bottom: 1px; }
  .event-title { font-weight: 500; color: #333333; }
  .day-event.private { background-color: #f5f5f5 !important; border-left-color: #cccccc !important; }
  .day-event.private .event-time-tag, .day-event.private .event-title { color: #777777; font-style: italic; }
  .seamless-cal-wrapper.mode-elastic .day-slot { min-height: 140px; }
  .seamless-cal-wrapper.mode-elastic .day-events-container { overflow: hidden; }
  .seamless-cal-wrapper.mode-elastic .event-title { white-space: normal; }
  .seamless-cal-wrapper.mode-grid .day-slot { height: 125px; max-height: 125px; overflow: hidden; }
  .seamless-cal-wrapper.mode-grid .day-events-container { overflow-y: auto; padding-right: 2px; }
  .seamless-cal-wrapper.mode-grid .event-title { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .matrix-more-link { font-size: 11px; color: var(--calendar-primary); font-weight: 700; cursor: pointer; padding: 2px 4px; display: inline-block; text-decoration: underline; margin-top: 2px; }
  .widget-overlay-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.45); backdrop-filter: blur(4px); z-index: 10000; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.2s ease; }
  .widget-overlay-modal.is-active { display: flex; opacity: 1; }
  .widget-modal-card { background: #ffffff; border-radius: 12px; width: 90%; max-width: 440px; box-shadow: 0 12px 36px rgba(0, 0, 0, 0.16); overflow: hidden; transform: translateY(20px); transition: transform 0.25s ease; }
  .widget-overlay-modal.is-active .widget-modal-card { transform: translateY(0); }
  .widget-modal-header { background-color: var(--calendar-primary); color: #ffffff; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 16px; }
  .widget-modal-close { background: none; border: none; color: #ffffff; font-size: 26px; cursor: pointer; line-height: 1; padding: 0; opacity: 0.8; }
  .widget-modal-body { padding: 20px; max-height: 340px; overflow-y: auto; box-sizing: border-box; }
  .widget-modal-body .day-event { margin-bottom: 8px; font-size: 12px; padding: 8px 10px; }
`

const styleEl = document.createElement('style')
styleEl.textContent = cssStyles
document.head.appendChild(styleEl)

// 2. INJECT THE STATIC OVERLAY MODAL HTML CODE AT THE BOTTOM OF THE BODY AUTOMATICALLY
const modalHtml = `
  <div id="widget-calendar-modal" class="widget-overlay-modal">
    <div class="widget-modal-card">
      <div class="widget-modal-header">
        <span id="widget-modal-title">All Bookings</span>
        <button class="widget-modal-close" id="widget-modal-close-btn">&times;</button>
      </div>
      <div class="widget-modal-body" id="widget-modal-events-list"></div>
    </div>
  </div>
`
const modalContainer = document.createElement('div')
modalContainer.innerHTML = modalHtml
document.body.appendChild(modalContainer)

// 3. RUN THE CORE PIPELINE HANDLERS
let currentViewDate = new Date()
let cachedSaaSPayload = null

const widgetContainer = document.getElementById('seamless-calendar-widget')
const widgetId = widgetContainer ? widgetContainer.getAttribute('data-widget-id') : null
const API_ENDPOINT = `https://getwidgetcalendar-f3y3nhdp5q-uc.a.run.app?id=${widgetId}`

async function fetchAndRenderWidget() {
  if (!widgetId || !widgetContainer) return
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    if (data.error) {
      widgetContainer.innerHTML = `<div style="color:red; font-weight:bold;">SaaS Error: ${data.error}</div>`
      return
    }
    cachedSaaSPayload = data

    const settings = data.settings
    document.documentElement.style.setProperty('--calendar-primary', settings.primaryColor)
    document.documentElement.style.setProperty('--calendar-accent', settings.accentColor)
    widgetContainer.style.fontFamily =
      settings.fontFamily === 'serif'
        ? "'Playfair Display', serif"
        : settings.fontFamily === 'mono'
          ? "'Space Mono', monospace"
          : 'sans-serif'

    renderWidgetSkeleton()
    renderMonthGrid()
    initializeModalListeners()
  } catch (error) {
    console.error('SaaS core engine failure:', error)
    widgetContainer.innerHTML = `<div style="color:red;">Failed to connect to data stream.</div>`
  }
}

function renderWidgetSkeleton() {
  const activeMode = cachedSaaSPayload.settings.layoutMode || 'elastic'
  widgetContainer.innerHTML = `
    <section class="seamless-cal-wrapper mode-${activeMode}">
      <div class="cal-controls">
        <button id="prevMonth" class="nav-btn">&lt; Prev</button>
        <h2 id="currentMonthLabel">Loading...</h2>
        <button id="nextMonth" class="nav-btn">Next &gt;</button>
      </div>
      <div class="cal-weekday-header">
        <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
      </div>
      <div id="calendar-grid-body" class="month-grid"></div>
    </section>
  `
  document.getElementById('prevMonth').onclick = (e) => {
    e.preventDefault()
    currentViewDate.setMonth(currentViewDate.getMonth() - 1)
    renderMonthGrid()
  }
  document.getElementById('nextMonth').onclick = (e) => {
    e.preventDefault()
    currentViewDate.setMonth(currentViewDate.getMonth() + 1)
    renderMonthGrid()
  }
}

function renderMonthGrid() {
  const grid = document.getElementById('calendar-grid-body')
  const label = document.getElementById('currentMonthLabel')
  if (!grid || !label || !cachedSaaSPayload) return

  const year = currentViewDate.getFullYear()
  const month = currentViewDate.getMonth()
  label.innerText = currentViewDate.toLocaleString('en-GB', { month: 'long', year: 'numeric' })

  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const startingPadding = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  grid.innerHTML = ''

  for (let i = 0; i < startingPadding; i++) {
    const pad = document.createElement('div')
    pad.className = 'day-slot empty'
    grid.appendChild(pad)
  }

  const activeMode = cachedSaaSPayload.settings.layoutMode || 'elastic'
  const isLockedMatrix = activeMode.includes('grid')

  for (let day = 1; day <= daysInMonth; day++) {
    const daySlot = document.createElement('div')
    daySlot.className = 'day-slot'
    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const dayEvents = cachedSaaSPayload.events.filter(
      (e) => e.start.dateTime && e.start.dateTime.startsWith(dateKey),
    )

    const numSpan = document.createElement('span')
    numSpan.className = 'day-num'
    numSpan.innerText = day
    daySlot.appendChild(numSpan)
    const eventsContainer = document.createElement('div')
    eventsContainer.className = 'day-events-container'

    let visibleEvents = dayEvents
    let hiddenCount = 0
    if (isLockedMatrix) {
      const maxVisible = 1
      visibleEvents = dayEvents.slice(0, maxVisible)
      hiddenCount = dayEvents.length - maxVisible
    }

    visibleEvents.forEach((event) => {
      const startObj = new Date(event.start.dateTime)
      let timeStr = event.start.isAllDay
        ? 'All Day'
        : `${startObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`
      const evDiv = document.createElement('div')
      evDiv.className = `day-event ${event.isPrivate ? 'private' : ''}`
      evDiv.innerHTML = `<span class="event-time-tag">${timeStr}</span><span class="event-title">${event.summary}</span>`
      eventsContainer.appendChild(evDiv)
    })

    if (hiddenCount > 0) {
      const moreLink = document.createElement('a')
      moreLink.className = 'matrix-more-link'
      moreLink.innerText = `+ ${hiddenCount} more`
      moreLink.addEventListener('click', (e) => {
        e.stopPropagation()
        openCalendarModal(dateKey, dayEvents)
      })
      eventsContainer.appendChild(moreLink)
    }
    daySlot.appendChild(eventsContainer)
    grid.appendChild(daySlot)
  }
}

function openCalendarModal(dateLabel, allDayEvents) {
  const modal = document.getElementById('widget-calendar-modal')
  const title = document.getElementById('widget-modal-title')
  const listContainer = document.getElementById('widget-modal-events-list')
  if (!modal || !listContainer) return

  title.innerText = `Bookings for ${new Date(dateLabel).toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}`
  listContainer.innerHTML = ''

  allDayEvents.forEach((event) => {
    const startObj = new Date(event.start.dateTime)
    let timeStr = event.start.isAllDay
      ? 'All Day'
      : `${startObj.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`
    const item = document.createElement('div')
    item.className = `day-event ${event.isPrivate ? 'private' : ''}`
    item.innerHTML = `<span class="event-time-tag">${timeStr}</span><span class="event-title">${event.summary}</span>`
    listContainer.appendChild(item)
  })
  modal.classList.add('is-active')
}

function initializeModalListeners() {
  const modal = document.getElementById('widget-calendar-modal')
  const closeBtn = document.getElementById('widget-modal-close-btn')
  if (closeBtn && modal) {
    closeBtn.onclick = () => modal.classList.remove('is-active')
  }
  window.onclick = (e) => {
    if (modal && e.target === modal) {
      modal.classList.remove('is-active')
    }
  }
}

fetchAndRenderWidget()
