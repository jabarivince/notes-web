import HTTPService from './HttpService'
import api from '../assets/json/api-config.json'

const SupportService = {
  sendFeedback(feedback) {
    return HTTPService.post(api.url.contact, feedback)
  }
}

export default SupportService
