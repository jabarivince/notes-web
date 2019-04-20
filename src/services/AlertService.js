const AlertService = {
  async error(payload) {
    alert(payload.message)
    console.error(payload)
  },

  async success(payload) {
    alert(payload.message)
    console.log(payload)
  }
}

export default AlertService
