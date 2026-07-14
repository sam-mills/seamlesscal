const {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Button,
  Hr,
} = require('@vue-email/components')
const { h } = require('vue')

const WelcomeEmail = () => {
  return h(Html, { lang: 'en' }, [
    h(Head),
    h(Preview, {}, "Welcome to SeamlessCal! Let's get synchronized."),
    h(
      Body,
      {
        style: `
        background-color: #f6f9fc;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        padding: 20px 0;
      `,
      },
      [
        h(
          Container,
          {
            style: `
          background-color: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          padding: 40px;
          max-width: 600px;
          margin: 0 auto;
        `,
          },
          [
            // Logo Header
            h(Section, { style: 'text-align: center; margin-bottom: 32px' }, [
              h(Img, {
                src: 'https://seamlesscal.com/logo.png',
                alt: 'SeamlessCal Logo',
                width: '160',
                height: '36',
                style: 'margin: 0 auto',
              }),
            ]),

            // Core Greeting Header
            h(
              Heading,
              {
                style: `
            color: #18181b;
            font-size: 24px;
            font-weight: 600;
            line-height: 1.3;
            margin-bottom: 16px;
          `,
              },
              'Welcome to the clock, {{ name }}!',
            ),

            // Paragraph Body Text
            h(
              Text,
              { style: 'color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px' },
              "Thanks for creating an account with SeamlessCal. Your scheduling engine is now online. Let's get your availability connected so clients can book you seamlessly.",
            ),

            // Action CTA Button
            h(Section, { style: 'text-align: center; margin-bottom: 32px; margin-top: 24px' }, [
              h(
                Button,
                {
                  href: 'https://seamlesscal.com/',
                  style: `
              background-color: #2563eb;
              color: #ffffff;
              font-size: 16px;
              font-weight: 500;
              text-decoration: none;
              padding: 12px 24px;
              border-radius: 6px;
              display: inline-block;
            `,
                },
                'Connect Your Calendar',
              ),
            ]),

            h(Hr, {
              style:
                'border: 0; border-top: 1px solid #e4e4e7; margin-bottom: 24px; margin-top: 32px',
            }),

            // Legal Footer Block
            h(
              Text,
              { style: 'color: #9ca3af; font-size: 12px; line-height: 1.5; text-align: center' },
              [
                'SeamlessCal Inc., London, UK ',
                h('br'),
                " If you didn't create this account, please disregard this message.",
              ],
            ),
          ],
        ),
      ],
    ),
  ])
}

module.exports = { default: WelcomeEmail }
