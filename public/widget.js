;(function () {
  // Prevent script execution errors if running in a non-browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  // Prevent duplicate execution cycles if the script is accidentally included twice
  if (window.__SEAMLESSCAL_WIDGET_LOADED__) return
  window.__SEAMLESSCAL_WIDGET_LOADED__ = true

  function initSeamlessCalWidget() {
    // 1. Locate the target placeholder element on the host webpage
    const targetDiv = document.getElementById('seamlesscal-widget')
    if (!targetDiv) {
      console.warn(
        'SeamlessCal Warning: Target placeholder element <div id="seamlesscal-widget"> was not found in the DOM.',
      )
      return
    }

    // Prevent re-injecting into a container that already has an active frame running
    if (targetDiv.querySelector('iframe')) return

    // 2. Extract the critical widget identity token
    const widgetId = targetDiv.getAttribute('data-widget-id') || ''

    if (!widgetId) {
      console.error(
        'SeamlessCal Error: Missing critical attribute [data-widget-id]. Aborting engine initialization.',
      )
      targetDiv.innerHTML = `<div style="color: #ef4444; font-family: system-ui, sans-serif; font-size: 12px; padding: 10px; border: 1px dashed #ef4444; border-radius: 4px;">SeamlessCal Error: Configuration Missing (Invalid ID)</div>`
      return
    }

    // 3. DYNAMIC DOMAIN CONFIGURATOR (NEW)
    // Automatically flips between localhost and your real cloud production hosting site domain cleanly
    const BASE_URL = window.location.origin.includes('localhost')
      ? 'http://localhost:5173'
      : 'https://your-production-app.web.app' // Change this string snippet to your live URL on deployment

    // 4. FORWARD ACTIVE PASSTHROUGH PARAMETERS (NEW)
    // Extracts any real-time, unsaved dashboard updates sitting in the parent browser address layer
    // and seamlessly routes them directly through the iframe canvas container stack.
    const parentUrlParams = new URLSearchParams(window.location.search)
    let iframeSrc = `${BASE_URL}/render-widget.html?id=${encodeURIComponent(widgetId)}`

    parentUrlParams.forEach((value, key) => {
      if (key !== 'id') {
        iframeSrc += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      }
    })

    // 5. Build the iframe element dynamically
    const iframe = document.createElement('iframe')
    iframe.id = 'seamlesscal-canvas-frame'
    iframe.src = iframeSrc
    iframe.className = 'seamlesscal-iframe-canvas'

    // Ensure the iframe behaves like an integrated, native layout block
    iframe.style.width = '100%'
    iframe.style.border = 'none'
    iframe.style.backgroundColor = 'transparent'
    iframe.style.overflow = 'hidden'
    iframe.style.height = '550px' // Baseline starting height block

    // 6. Clear out placeholders and append live canvas
    targetDiv.innerHTML = ''
    targetDiv.appendChild(iframe)
  }

  // 7. Dynamic Telemetry Listener: Catch height updates from inside the sandboxed frame
  window.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'SEAMLESSCAL_RESIZE') {
      const dynamicFrame = document.getElementById('seamlesscal-canvas-frame')
      if (dynamicFrame && event.data.height) {
        // Instantly expand or contract the frame wrapper dynamically
        dynamicFrame.style.height = event.data.height + 'px'
      }
    }
  })

  // Execute initialization cleanly when DOM layout structures parse
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initSeamlessCalWidget()
  } else {
    document.addEventListener('DOMContentLoaded', initSeamlessCalWidget)
  }
})()
