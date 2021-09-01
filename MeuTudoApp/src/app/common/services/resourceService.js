import axios from './axiosInterceptor'

const resourceService = (baseUrl, requests) => {
  const resource = {}

  Object.keys(requests).forEach(key => {
    const request = requests[key]

    const url = request.url || ''
    const urlParams = String(url).match(/(?::)(\w+)/g) || []

    resource[key] = (params, data) => {
      const newUrl = urlParams.reduce((newUrl, param) => {
        return newUrl.replace(param, params[param.replace(/:/g, '')])
      }, url)

      const query = Object.keys(params || {}).reduce((q, key) => {
        const isUrlParam = urlParams.findIndex(urlParam => key === urlParam.replace(/:/g, '')) !== -1

        if (!isUrlParam) {
          q[key] = params[key]
        }

        return q
      }, {})

      const config = {
        method: request.method || 'get',
        url: `${baseUrl}${newUrl}`,
        params: query,
        data
      }

      request.responseType && (config.responseType = request.responseType)

      return axios(config)
    }
  })

  return resource
}

export default resourceService
