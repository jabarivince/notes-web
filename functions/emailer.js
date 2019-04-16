async function send(email) {
  save(email)

  console.log(`to: ${email.to}, subject: ${email.subject}, body: ${email.body}`)
}

function save(email) {
  // TODO: Store email in firebase datastore
}

module.exports = {
  send : send
}
