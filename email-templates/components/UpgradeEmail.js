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
  Hr,
} = require('@vue-email/components')
const { h } = require('vue')

const UpgradeEmail = () => {
  return h(Html, { lang: 'en' }, [
    h(Head),
    h(Preview, {}, 'Your SeamlessCal Pro tier is active!'),
    h(Body, { style: 'background-color: #f6f9fc; font-family: sans-serif; padding: 20px 0;' }, [
      h(
        Container,
        {
          style:
            'background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 8px; padding: 40px; max-width: 600px; margin: 0 auto;',
        },
        [
          // Header
          h(Section, { style: 'text-align: center; margin-bottom: 32px' }, [
            h(Img, {
              src: 'https://seamlesscal.com/logo.png',
              alt: 'SeamlessCal Logo',
              width: '160',
              height: '36',
              style: 'margin: 0 auto',
            }),
          ]),

          // Heading
          h(
            Heading,
            { style: 'color: #059669; font-size: 24px; font-weight: 600; margin-bottom: 16px;' },
            'Your Pro Account is Live! 🚀',
          ),

          h(
            Text,
            { style: 'color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px' },
            'Thanks for upgrading! Your account has been successfully moved to the Professional tier.',
          ),

          h(Hr, { style: 'border: 0; border-top: 1px solid #e4e4e7; margin: 24px 0;' }),

          // Unlocked Features
          h(
            Heading,
            { style: 'color: #18181b; font-size: 18px; font-weight: 600; margin-bottom: 12px;' },
            'What you just unlocked:',
          ),

          h(
            'ul',
            {
              style:
                'color: #4b5563; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px; margin-bottom: 24px;',
            },
            [
              h('li', {}, [
                h('strong', {}, 'Agenda List View:'),
                ' A high-converting layout built for mobile devices.',
              ]),
              h('li', {}, [
                h('strong', {}, 'Widget Styling:'),
                ' Full control over borders, spacing, and edge roundness.',
              ]),
              h('li', {}, [
                h('strong', {}, 'Custom Typography:'),
                ' Match your widget fonts exactly to your website branding.',
              ]),
              h('li', {}, [
                h('strong', {}, 'White-Label Branding:'),
                ' The "Powered by SeamlessCal" badge is officially removed.',
              ]),
            ],
          ),

          h(
            Text,
            {
              style:
                'color: #4b5563; font-size: 15px; line-height: 1.6; font-style: italic; background-color: #f8fafc; padding: 12px; border-radius: 6px; margin-bottom: 32px;',
            },
            "Note: Your live widgets have updated automatically. You don't need to change any embed codes on your website.",
          ),

          h(Hr, { style: 'border: 0; border-top: 1px solid #e4e4e7; margin-bottom: 24px;' }),

          // Sign-off
          h(Text, { style: 'color: #4b5563; font-size: 15px; margin-bottom: 24px;' }, [
            'Cheers,',
            h('br'),
            h('strong', {}, 'The SeamlessCal Team'),
          ]),

          // Footer
          h(Text, { style: 'color: #9ca3af; font-size: 12px; text-align: center' }, [
            'SeamlessCal Inc., London, UK',
            h('br'),
            'Have a billing question? Just reply directly to this email.',
          ]),
        ],
      ),
    ]),
  ])
}

module.exports = { default: UpgradeEmail }
