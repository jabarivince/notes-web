const ftest    = require('firebase-functions-test')()
ftest.mockConfig({
  email: {
    user: '',
    password: ''
  }
})

const request = require('supertest')
const app     = require('./index').app

describe('/contact', () => {
  const endpoint = '/contact'

  test('POST null, recieve 406', done => {
    request(app)
    .post(endpoint)
    .send(null)
    .expect(406)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  test('POST undefined, recieve 406', done => {
    request(app)
    .post(endpoint)
    .send(undefined)
    .expect(406)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  test('POST {}, recieve 406', done => {
    request(app)
    .post(endpoint)
    .send({})
    .expect(406)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  test('POST without email, recieve 406', done => {
    request(app)
    .post(endpoint)
    .send({body: 'body'})
    .expect(406)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  test('POST invalid email, recieve 406', done => {
    request(app)
    .post(endpoint)
    .send({email: 'email'})
    .expect(406)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  test('POST without body, recieve 406', done => {
    request(app)
    .post(endpoint)
    .send({email: 'email@email.com'})
    .expect(406)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  test('POST bare minimum (email and body), recieve 201', done => {
    request(app)
    .post(endpoint)
    .send({email: 'email@email.com', body: 'body'})
    .expect(201)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  test('POST all fields, recieve 201', done => {
    const payload = {
      firstName: 'firstName',
      lastName: 'lastName',
      subject: 'subject',
      email: 'some@email.com',
      body: 'body'
    }

    request(app)
    .post(endpoint)
    .send(payload)
    .expect(201)
    .end((err, res) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })
})
