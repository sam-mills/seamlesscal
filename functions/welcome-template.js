module.exports = {
  welcomeHtml: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html lang="en" dir="ltr">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <title>Welcome to SeamlessCal</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
            .wrapper { width: 100%; table-layout: fixed; background-color: #f9fafb; padding-bottom: 40px; padding-top: 40px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eaecf0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
            .header { background-color: #121214; padding: 32px; text-align: center; border-bottom: 1px solid #27272a; }
            .logo { font-size: 14px; font-weight: 700; letter-spacing: 0.15em; color: #a1a1aa; margin: 0; }
            .body { padding: 40px 32px; }
            h1 { font-size: 24px; font-weight: 700; color: #101828; margin-top: 0; margin-bottom: 12px; }
            p { font-size: 16px; line-height: 24px; color: #475467; margin-top: 0; margin-bottom: 24px; }
            .seed-box { background-color: #f8f9fa; border: 1px solid #eaecf0; border-radius: 8px; padding: 20px; margin-bottom: 32px; }
            .seed-box p { font-size: 14px; line-height: 20px; color: #475467; margin: 0; }
            .cta-container { text-align: center; margin-top: 24px; margin-bottom: 16px; }
            .btn { display: inline-block; padding: 12px 24px; background-color: #1e6b7b; color: #ffffff !important; font-weight: 600; font-size: 16px; text-decoration: none; border-radius: 8px; box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05); }
            .btn:hover { background-color: #154d59; }
            .footer { text-align: center; padding: 0 32px 40px 32px; border-top: 1px solid #eaecf0; pt: 24px; }
            .footer p { font-size: 12px; color: #98a2b3; margin: 0; line-height: 1.5; }
        </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <div class="header">
            <p class="logo">SEAMLESSCAL</p>
          </div>
          <div class="body">
            <h1>Welcome to SeamlessCal, {{ name }}!</h1>
            <p>Thanks for creating an account with us. Your custom calendar styling engine is officially online.</p>
            
            <p>Right now, you can design a beautiful interactive calendar that matches your website flawlessly, connect it to your Google Calendar, and display your free times to the world completely free.</p>
            
            <div class="seed-box">
              <p><strong>Ready to take active bookings?</strong><br>
              Whenever you're ready to let clients select slots, fill out forms, and schedule appointments with you directly from your site, just hop over to your settings to unlock our full automated scheduling engine for just $15/month.</p>
            </div>

            <div class="cta-container">
              <a href="https://app.seamlesscal.com/dashboard/customizer" class="btn">Customize Your Calendar</a>
            </div>
          </div>
          <div class="footer">
            <p>SeamlessCal • London, UK <br> If you didn't create this account, you can safely ignore this email.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `,
}
