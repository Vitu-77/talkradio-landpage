import { Container } from './stylex'

export const IntranetLoginForm = () => {
	return (
		<Container>
			<iframe
				name='FRAME1'
				src='https://intranet.talkradio.com.br/Default.aspx?ReturnUrl=%2f'
				width='100%'
				height='800'
				marginHeight={0}
				marginWidth={0}
				scrolling='auto'
				frameBorder={0}></iframe>
		</Container>
	)
}
