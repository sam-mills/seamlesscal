module.exports = {
  upgradeHtml: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SeamlessCal Pro Activated</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f9fafb; padding-bottom: 40px; padding-top: 40px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eaecf0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .header { background-color: #121214; padding: 32px; text-align: center; border-b: 1px solid #27272a; }
        .logo { font-size: 14px; font-weight: 700; letter-spacing: 0.15em; color: #a1a1aa; margin: 0; }
        .body { padding: 40px 32px; }
        h1 { font-size: 24px; font-weight: 700; color: #101828; margin-top: 0; margin-bottom: 12px; }
        p { font-size: 16px; line-height: 24px; color: #475467; margin-top: 0; margin-bottom: 24px; }
        .feature-box { background-color: #f8f9fa; border: 1px solid #eaecf0; border-radius: 8px; padding: 24px; margin-bottom: 32px; }
        .feature-box h2 { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #667085; margin-top: 0; margin-bottom: 16px; }
        .feature-list { list-style: none; padding: 0; margin: 0; }
        .feature-item { display: table; margin-bottom: 16px; }
        .feature-item:last-child { margin-bottom: 0; }
        .feature-icon { display: table-cell; font-size: 20px; width: 32px; vertical-align: top; }
        .feature-text { display: table-cell; font-size: 14px; line-height: 20px; color: #344054; }
        .feature-text strong { display: block; color: #101828; font-weight: 600; margin-bottom: 2px; }
        .cta-container { text-align: center; }
        .btn { display: inline-block; padding: 12px 24px; background-color: #1e6b7b; color: #ffffff !important; font-weight: 600; font-size: 16px; text-decoration: none; border-radius: 8px; box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05); }
        .btn:hover { background-color: #154d59; }
        .footer { text-align: center; padding: 0 32px 40px 32px; }
        .footer p { font-size: 12px; color: #98a2b3; margin: 0; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <p class="logo">SEAMLESSCAL</p>
          </div>
          <div class="body">
            <h1>Your Pro account is officially active!</h1>
            <p>Thanks so much for upgrading to SeamlessCal Pro. Your new features are ready to use right away. Your plan is locked in at $15/month.</p>
            
            <div class="feature-box">
              <h2>Here is what you've just unlocked:</h2>
              <div class="feature-list">
                <div class="feature-item">
                  <div class="feature-icon">✨</div>
                  <div class="feature-text">
                    <strong>Live Client Booking</strong>
                    People can now look at your calendar, pick a time that works, and book an appointment with you instantly.
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">🔒</div>
                  <div class="feature-text">
                    <strong>Clean, Unbranded Calendars</strong>
                    The "Powered by SeamlessCal" badge has been completely removed from your embedded designs, making it look 100% your own.
                  </div>
                </div>
                <div class="feature-item">
                  <div class="feature-icon">⚡</div>
                  <div class="feature-text">
                    <strong>Full Creative Control</strong>
                    You can now use custom corner styles, new fonts, and the streamlined Agenda list view to make your calendar match your website perfectly.
                  </div>
                </div>
              </div>
            </div>

            <div class="cta-container">
              <a href="https://app.seamlesscal.com/dashboard/customizer" class="btn">Customize Your Calendar</a>
            </div>
          </div>
          <div class="footer">
            <p>SeamlessCal • Beautiful calendars for your website.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `,
}
