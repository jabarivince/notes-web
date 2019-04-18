const functions = require('firebase-functions')
const admin     = require('firebase-admin')
const express   = require('express')
const service   = require('./service')
const parser    = require('body-parser')
const app       = express()

admin.initializeApp()

app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))
app.post('/contact', sendEmail)
app.use(handleUnexpectedError)

function send(res, payload) {
  res
  .status(payload.code)
  .json(payload)
}

function handleUnexpectedError(error, req, res, next) {
  const body = {
    title: 'Internal server error',
    message: 'Something went wrong!',
    body: req.body,
    code: 500
  }

  service.report(error)
  send(res, body)
}

function sendEmail(req, res, next) {
  const email = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    subject: req.body.subject,
    body: req.body.body
  }

  const response = {
    message: "Message recieved!",
    email: email
  }

  service.process(email)
  res.status(200).send(response)
}

exports.app = functions.https.onRequest(app)
