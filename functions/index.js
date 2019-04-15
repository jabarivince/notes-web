const functions = require('firebase-functions')
const admin     = require('firebase-admin')
const express   = require('express')
const cors      = require('cors')
const emailer   = require('./emailer')
const parser    = require('body-parser')
const app       = express()

admin.initializeApp()

app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))
app.post('/contact', sendEmail)
app.use(handleError)

function handleError(err, req, res, next) {
  console.error(err.stack)

  const response = {
    message: 'Something went wrong!'
  }

  res.status(500).send(response)
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
