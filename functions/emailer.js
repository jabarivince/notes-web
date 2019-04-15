async function send(email) {

  // TODO: Implement sending email here!
  console.log(`to: ${email.to}, subject: ${email.subject}, body: ${email.body}`)
}

module.exports = {
  send : send
}
