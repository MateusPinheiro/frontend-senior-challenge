import Axios from 'axios'
// import localStorageService from './localStorageService'

const axios = Axios.create({ baseURL: 'https://demo7273790.mockable.io' })

axios.interceptors.request.use(config => {
  // const token = localStorageService.getToken()

  // if (token) {
  //   config.headers.Authorization = 'Basic ' + token.replaceAll('"', '')
  // }

  config.withCredentials = true

  return config
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject({ ...error, response: { ...error.response } })
})

export default axios
