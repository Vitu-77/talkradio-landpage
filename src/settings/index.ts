export const settings = {
	talkPlayApiUrl: () => {
		return process.env.NEXT_PUBLIC_TALK_PLAY_API_URL
	},
	intranetApiUrl: () => {
		return process.env.NEXT_PUBLIC_INTRANET_API_URL
	},
}
