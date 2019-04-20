const functions = require('firebase-functions')
const firebase  = require('firebase-admin')
const express   = require('express')
const service   = require('./service')
const parser    = require('body-parser')
const cors      = require('cors')
const app       = express()

app.use(cors({origin: true}))
app.use(parser.json())
app.use(parser.urlencoded({ extended: false }))
app.post('/contact', sendEmail)
app.use(handleError)

function send(res, payload, code) {
  res.status(code)
     .json(payload)
}

function handleError(error, req, res, next) {
  let code = 500

  const body = {
    title: 'Internal server error',
    message: 'Something went wrong',
    messages: [],
    body: req.body
  }

  if (error instanceof service.CustomError) {
    body.title = 'Bad request'
    body.messages = error.messages
    code = 406
  }

  service.report(error)
  send(res, body, code)
}

function sendEmail(req, res, next) {
  const response = {
    title: "Message recieved",
    message: 'Your message will be sent soon',
    email: {
      firstName: req.body.firstName || '',
      lastName: req.body.lastName || '',
      email: req.body.email,
      subject: req.body.subject || '',
      body: req.body.body
    }
  }

  service.process(response.email)
  send(res, response, 201)
}

exports.app = functions.https.onRequest(app)
