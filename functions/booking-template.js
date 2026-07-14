const bookingHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Confirmed</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <tr>
      <td style="padding: 32px 40px; background-color: #10b981; text-align: center;">
        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.025em;">SeamlessCal</h1>
      </td>
    </tr>
    
    <tr>
      <td style="padding: 40px 40px 32px 40px;">
        <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 20px; font-weight: 700; letter-spacing: -0.025em;">Your appointment is confirmed! 🎉</h2>
        <p style="margin: 0 0 24px 0; color: #475569; font-size: 14px; line-height: 1.6;">Hi <strong>{{ clientName }}</strong>,</p>
        <p style="margin: 0 0 32px 0; color: #475569; font-size: 14px; line-height: 1.6;">Great news! Your booking request has been officially approved and added to our schedule matrix. Below you'll find the finalized operational details for your session.</p>
        
        <table width="100%" style="background-color: #f8fafc; border: 1px solid #f1f5f9; border-radius: 8px; border-collapse: separate; padding: 20px; margin-bottom: 24px;">
          <tr>
            <td style="padding-bottom: 12px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 30%;">Organizer:</td>
            <td style="padding-bottom: 12px; font-size: 14px; color: #0f172a; font-weight: 600;">{{ hostName }}</td>
          </tr>
          <tr>
            <td style="padding-bottom: 12px; font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Date & Time:</td>
            <td style="padding-bottom: 12px; font-size: 14px; color: #0f172a; font-weight: 600;">{{ meetingTime }}</td>
          </tr>
          <tr>
            <td style="font-size: 12px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Contact Email:</td>
            <td style="font-size: 14px; color: #0f172a; font-weight: 600;">{{ hostEmail }}</td>
          </tr>
        </table>
        
        <div id="organizer-notes-outlet"></div>
      </td>
    </tr>
    
    <tr>
      <td style="padding: 0 40px 40px 40px;">
        <p style="margin: 0 0 8px 0; color: #475569; font-size: 14px; line-height: 1.6;">If you need to make changes or have questions prior to the meeting, please get in touch directly via the contact email provided above.</p>
        <p style="margin: 24px 0 0 0; color: #94a3b8; font-size: 12px; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 24px;">This is an automated operational transmission from your SeamlessCal instance.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`

module.exports = { bookingHtml }
