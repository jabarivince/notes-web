const ftest = require('firebase-functions-test')()
ftest.mockConfig({
  email: {
    user: '',
    password: ''
  }
})

const service = require('./service')

describe('process() with invalid arguments', () => {
  test('send null payload, expect error', () => {
    expect(() => service.process(null)).toThrowError(service.CustomError)
  })

  test('send undefined payload, expect error', () => {
    expect(() => service.process(undefined)).toThrowError(service.CustomError)
  })

  test('send empty payload, expect error', () => {
    expect(() => service.process({})).toThrowError(service.CustomError)
  })

  test('send invalid email, expect error', () => {
    expect(() => service.process({email:'email'})).toThrowError(service.CustomError)
  })

  test('send empty email, expect error', () => {
    expect(() => service.process({body:'body'})).toThrowError(service.CustomError)
  })

  test('send empty body, expect error', () => {
    expect(() => service.process({email:'email@email.com'})).toThrowError(service.CustomError)
  })
})
