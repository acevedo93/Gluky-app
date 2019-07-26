import axios from 'axios'

import {
  PROTOCOL,
  DOMAIN,
  API
} from './routes'

export const axiosCreate = axios.create({
  baseURL: `${PROTOCOL}${DOMAIN}${API}`,
  timeout: 60000
})
