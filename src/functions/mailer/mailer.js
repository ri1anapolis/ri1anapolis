const nodemailer = require("nodemailer")

exports.handler = async (event, context, callback) => {
  try {
    const { subject, replyTo, plainTextMessage, htmlMessage } = JSON.parse(
      event.body
    )

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_USE_TLS || false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject,
      replyTo,
      text: plainTextMessage,
      html: htmlMessage,
    })

    return callback(null, { statusCode: 200, body: JSON.stringify(info) })
  } catch (err) {
    return callback(JSON.stringify(err))
  }
}
