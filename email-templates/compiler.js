const { render } = require('@vue-email/render')
const fs = require('fs')
const path = require('path')

const WelcomeTemplate = require('./components/WelcomeEmail.js').default
const UpgradeTemplate = require('./components/UpgradeEmail.js').default

// Capture the argument passed in terminal (e.g., 'welcome' or 'upgrade')
const target = process.argv[2]?.toLowerCase()

async function compileTemplate(name, template) {
  console.log(`📦 Compiling ${name} Template...`)
  const htmlOutput = await render(template, {}, { pretty: true })

  const distDir = path.join(__dirname, 'dist')
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir)

  fs.writeFileSync(path.join(distDir, `${name.toLowerCase()}.html`), htmlOutput)
  console.log(`✨ Saved to dist/${name.toLowerCase()}.html`)
}

async function start() {
  if (target === 'welcome') {
    await compileTemplate('Welcome', WelcomeTemplate)
  } else if (target === 'upgrade') {
    await compileTemplate('Upgrade', UpgradeTemplate)
  } else {
    // If no specific argument or an unknown argument is given, build everything
    console.log('🚀 No target specified. Compiling all templates...')
    await compileTemplate('Welcome', WelcomeTemplate)
    await compileTemplate('Upgrade', UpgradeTemplate)
  }
}

start().catch(console.error)
