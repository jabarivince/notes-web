const nodemailer  = require('nodemailer')
const validator   = require("email-validator")
const functions   = require('firebase-functions')
const firebase    = require('firebase-admin')
firebase.initializeApp()
const config      = functions.config()
const firestore   = firebase.firestore()
const db          = firestore.collection('feedback')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.user,
    pass: config.email.password
  }
})

class CustomError extends Error {
  constructor(messages) {
    super()

    if (!Array.isArray(messages)) {
      throw new Error('Argument "messages" must be of type Array')
    }

    this.messages = messages
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
  if (!email) {
    throw new CustomError(['Email must not be null or undefined'])
  }

  const messages = [
    {condition: !email.email, message: 'Email field must not ne empty'},
    {condition: !validator.validate(email.email), message: 'Email must be a valid email. For example, some@email.com'},
    {condition: !email.body, message: 'Email body must not be empty'},
  ]
  .filter(entry => entry.condition)
  .map(entry => entry.message)

  if (messages.length > 0) {
    throw new CustomError(messages)
  }

  return email
}

function save(email) {
  return db.add(email)
           .then(() => email)
           .catch(report)
}

function send(email) {
  return transporter.sendMail({
    from: config.email.user,
    to: config.email.user,
    subject: `[notes-user-feedback]: ${email.subject}`,
    text: `
      Email: ${email.email}
      First Name: ${email.firstName}
      Last Name: ${email.lastName}
      Subject: ${email.subject}
      Body: ${email.body}
    `
  })
}

module.exports = {
  process,
  report,
  CustomError
}
