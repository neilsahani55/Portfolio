import nodemailer from 'nodemailer'

const REQUIRED_ENV_VARS = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'MAIL_TO',
  'MAIL_FROM',
]

function getMissingEnvVars() {
  return REQUIRED_ENV_VARS.filter((key) => !process.env[key])
}

function sanitize(value) {
  return String(value || '').trim()
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const missingEnvVars = getMissingEnvVars()
  if (missingEnvVars.length > 0) {
    return res.status(500).json({
      error: 'Mail server is not configured yet.',
    })
  }

  const { name, email, phone, message } = req.body || {}
  const safeName = sanitize(name)
  const safeEmail = sanitize(email)
  const safePhone = sanitize(phone)
  const safeMessage = sanitize(message)

  if (!safeName || !safeEmail || !safePhone || !safeMessage) {
    return res.status(400).json({ error: 'Please fill in all required fields.' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: String(process.env.SMTP_SECURE || 'true').toLowerCase() === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const text = [
    'New portfolio contact form submission',
    '',
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Phone: ${safePhone}`,
    '',
    'Message:',
    safeMessage,
  ].join('\n')

  const html = `
    <h2>New portfolio contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(safePhone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(safeMessage).replace(/\n/g, '<br />')}</p>
  `

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: safeEmail,
      subject: `Portfolio Contact: ${safeName}`,
      text,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return res.status(500).json({ error: 'Unable to send your message right now.' })
  }
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}
