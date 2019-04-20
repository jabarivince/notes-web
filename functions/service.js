const nodemailer = require('nodemailer')
const functions = require('firebase-functions')
var validator = require("email-validator")
const config = functions.config()
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.user,
    pass: config.email.password
  }
})

class CustomError extends Error {
  constructor() {
    super()
    this.messages = []
  }
}

function process(email) {
  validate(email)

  save(email)
  .then(send)
  .catch(report)
}

function report(error) {
  console.error(error)
}

function validate(email) {
  let messages = []

  if (!email) {
    messages.push('Email must not be null or undefined')

  } else {

    if (!email.email) {
      messages.push('Email field must not ne empty')
    }

    if (!validator.validate(email.email)) {
      messages.push('Email must be a valid email. For example, some@email.com')
    }

    if (!email.body) {
      messages.push('Email body must not be empty')
    }
  }

  if (messages.length > 0) {
    const error = new CustomError()

    error.messages = messages
    throw error
  }

  return email
}

async function save(email) {

  return email
}

async function send(email) {
  const user = config.email.user
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
    }
  })

  return email
}

module.exports = {
  process,
  report,
  CustomError
}
