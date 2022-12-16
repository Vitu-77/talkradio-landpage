import { settings } from '@settings/index'
import axios from 'axios'

const api = axios.create({ baseURL: `${settings.apiUrl()}/api/v2` })

export { api }
