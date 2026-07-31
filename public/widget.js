;(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (window.__SEAMLESSCAL_WIDGET_LOADED__) return
  window.__SEAMLESSCAL_WIDGET_LOADED__ = true

  function initSeamlessCalWidget() {
    const targetDiv = document.getElementById('seamlesscal-widget')
    if (!targetDiv || targetDiv.querySelector('iframe')) return

    const widgetId = targetDiv.getAttribute('data-widget-id') || ''
    if (!widgetId) {
      targetDiv.innerHTML = `<div style="color: #ef4444; font-family: system-ui, sans-serif; font-size: 12px; padding: 10px; border: 1px dashed #ef4444; border-radius: 4px;">SeamlessCal Error: Configuration Missing</div>`
      return
    }

    const BASE_URL =
      window.location.origin.includes('localhost') || window.location.protocol === 'file:'
        ? 'http://localhost:5173'
        : 'https://' + window.location.hostname

    const parentUrlParams = new URLSearchParams(window.location.search)
    let iframeSrc = `${BASE_URL}/render-widget.html?id=${encodeURIComponent(widgetId)}`

    parentUrlParams.forEach((value, key) => {
      if (key !== 'id') {
        iframeSrc += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      }
    })

    // 1. Inject primary events calendar directly inline
    const iframe = document.createElement('iframe')
    iframe.id = 'seamlesscal-canvas-frame'
    iframe.src = iframeSrc
    iframe.style.width = '100%'
    iframe.style.border = 'none'
    iframe.style.backgroundColor = 'transparent'
    iframe.style.overflow = 'hidden'
    iframe.style.height = '550px'

    targetDiv.innerHTML = ''
    targetDiv.appendChild(iframe)

    // 2. Build the hidden booking modal overlay structure right here
    injectModalStyles()

    const modalOverlay = document.createElement('div')
    modalOverlay.id = 'seamlesscal-modal-overlay'

    const modalContainer = document.createElement('div')
    modalContainer.id = 'seamlesscal-modal-container'

    const closeBtn = document.createElement('button')
    closeBtn.id = 'seamlesscal-modal-close'
    closeBtn.innerHTML = '&times;'

    // Connects directly to our public Vue booking routing route path!
    const bookingIframe = document.createElement('iframe')
    bookingIframe.id = 'seamlesscal-modal-frame'
    bookingIframe.src = `${BASE_URL}/render-widget?id=${encodeURIComponent(widgetId)}`
    bookingIframe.style.width = '100%'
    bookingIframe.style.height = '600px'
    bookingIframe.style.border = 'none'
    bookingIframe.style.backgroundColor = 'transparent'

    modalContainer.appendChild(closeBtn)
    modalContainer.appendChild(bookingIframe)
    modalOverlay.appendChild(modalContainer)
    document.body.appendChild(modalOverlay)

    const closeModal = () => {
      modalOverlay.style.display = 'none'
      document.body.style.overflow = ''
    }
    closeBtn.addEventListener('click', closeModal)
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal()
    })
  }

  function injectModalStyles() {
    const style = document.createElement('style')
    style.textContent = `
      #seamlesscal-modal-overlay {
        display: none;
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        background-color: rgba(9, 9, 11, 0.85);
        backdrop-filter: blur(6px);
        z-index: 99999999;
        justify-content: center; align-items: center;
        padding: 20px; box-sizing: border-box;
      }
      #seamlesscal-modal-container {
        position: relative; width: 100%; max-width: 850px;
        background: transparent; border-radius: 12px; overflow: hidden;
        animation: scFadeInUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      }
      #seamlesscal-modal-close {
        position: absolute; top: -40px; right: 0;
        background: transparent; border: none;
        color: rgba(255, 255, 255, 0.8); font-size: 32px;
        cursor: pointer; outline: none;
      }
      @keyframes scFadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `
    document.head.appendChild(style)
  }

  // 🚀 GLOBAL TELEMETRY RECEIVER: Listens for both resize actions and open-modal flags!
  window.addEventListener('message', function (event) {
    if (!event.data) return

    // Action A: Open the Modal layer
    if (event.data.type === 'LAUNCH_SEAMLESS_BOOKING_MODAL') {
      const modal = document.getElementById('seamlesscal-modal-overlay')
      if (modal) {
        modal.style.display = 'flex'
        document.body.style.overflow = 'hidden'
      }
    }

    // Action B: Process standard responsive resizes
    if (event.data.type === 'SEAMLESSCAL_RESIZE') {
      const dynamicFrame = document.getElementById('seamlesscal-canvas-frame')
      if (dynamicFrame && event.data.height) {
        dynamicFrame.style.height = event.data.height + 4 + 'px'
      }
    }
  })

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initSeamlessCalWidget()
  } else {
    document.addEventListener('DOMContentLoaded', initSeamlessCalWidget)
  }
})()
