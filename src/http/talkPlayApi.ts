import { settings } from '@settings/index'
import axios from 'axios'

const talkPlayApi = axios.create({
	baseURL: `${settings.talkPlayApiUrl()}/api/v2`,
})

export { talkPlayApi }
