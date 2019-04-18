const nodemailer = require('nodemailer')
const functions = require('firebase-functions')
const config = functions.config()
const user = config.email.user
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.user,
    pass: config.email.password
  }
})

function process(email) {
  save(email)
  .then(send)
  .catch(report)
}

function report(error) {
  console.error(error)
}

async function send(email) {
  const options = {
    from: user,
    to: user,
    subject: `[notes-user-feedback]: ${email.subject}`,
    text: `
      Email: ${email.email}
      First Name: ${email.firstName || ''}
      Last Name: ${email.lastName || ''}
      Subject: ${email.subject}
      Body: ${email.body}
    `
  }

  transporter.sendMail(options, (error, info) => {
    if (error) {
      report(error)
    } else {
      console.info('Email sent: ' + info.response);
    }
  })

  return email
}

async function save(email) {
  console.info('saving')

  return email
}

module.exports = {
  process,
  report
}
