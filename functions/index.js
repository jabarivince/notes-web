const functions = require('firebase-functions')
const admin     = require('firebase-admin')
const express   = require('express')
const cors      = require('cors')
const emailer   = require('./emailer')
const parser    = require('body-parser')
const app       = express()

admin.initializeApp()

app.use(cors())
app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))
app.post('/contact', sendEmail)
app.use(handleCustomError)
app.use(handleUnexpectedError)

function send(res, payload) {
  res.status(payload.code).json(payload)
}

function handleCustomError(err, req, res, next) {
  console.error(err.stack)

  if (false) {
    const body = {
      title: 'Not accepted',
      message: err.message,
      code: 406
    }

    send(res, body)

  } else {
    next(err)
  }
}

function handleUnexpectedError(err, req, res, next) {
  const body = {
    title: 'Internal server error',
    message: 'Something went wrong!',
    code: 500
  }

  send(res, body)
}

function sendEmail(req, res, next) {
  const email = {
    to: req.body.to,
    subject: req.body.subject,
    body: req.body.body
  }

  const response = {
    message: "Message recieved!",
    email: email
  }

  emailer.send(email)
  res.status(200).send(response)
}

exports.app = functions.https.onRequest(app)
