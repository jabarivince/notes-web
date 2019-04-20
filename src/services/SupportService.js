import HTTPService from './HttpService'
import api from '../assets/json/api-config.json'

const SupportService = {
  sendFeedback(feedback) {
    return HTTPService
    .post(api.url.contact, feedback)
    .then(response => console.log(response))
    .catch(error => {throw error})
  }
}

export default SupportService
