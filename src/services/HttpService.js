import axios from 'axios'

const HTTPService = {

  post(url, payload) {
    return axios
    .post(url, payload)
    .then(response => {
      return response
    })
    .catch(error => {
      const reason = {
        title: 'Oops!',
        message: 'Something went wrong!',
        originalPayload: payload,
        error: error
      }

      throw reason
    })
  }
}

export default HTTPService
