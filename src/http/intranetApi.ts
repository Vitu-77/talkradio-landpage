import { settings } from '@settings/index'
import axios from 'axios'

const intranetApi = axios.create({
	baseURL: settings.intranetApiUrl(),
})

export { intranetApi }
