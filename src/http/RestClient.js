
import { axiosCreate } from './axiosInstance'

class RestClient {
  instance;

  token;

  constructor () {
    this.instance = axiosCreate
    const token = window.localStorage.getItem('auth-token')
    this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    // this.instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // this.instance.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        const errorResponse = error.response
        if (errorResponse.status === 401) {
          // error
        }
        if (errorResponse.status === 403) {
          // error
        }
        if (errorResponse.status === 500) {
          // error
        }
        return Promise.reject(error)
      }
    )
  }
}

export default RestClient
