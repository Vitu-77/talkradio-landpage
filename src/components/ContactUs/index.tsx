import { Button } from '@components/Button'
import { FC } from 'react'
import {
	Container,
	TextSection,
	ImageContainer,
	ImageOverlay,
	ImageBg,
	MobileImageBg,
	MobileImageContainer,
} from './styles'

import bg from '@assets/contact-us.png'
import bgMobile from '@assets/contact-us-mobile.png'

export const ContactUs: FC = () => {
	return (
		<Container id='entramos-em-contato'>
			<TextSection>
				<h4>Cliente VIP</h4>
				<h2>Deixe o trabalho duro com a gente</h2>
				<p>
					Nós podemos te ajudar de forma ainda mais direta, conte com nossa
					produtora para alavancar a sua rádio
				</p>

				<a className='ancor' href='#entre-em-contato'>
					<Button
						content='Fale conosco'
						variant='red'
						style={{ width: 'max-content' }}
					/>
				</a>
			</TextSection>

			<ImageContainer>
				<ImageBg style={{ backgroundImage: `url(${bg.src})` }} />
				<ImageOverlay style={{ borderRadius: 8 }} />
			</ImageContainer>

			<MobileImageContainer>
				<MobileImageBg style={{ backgroundImage: `url(${bgMobile.src})` }} />
				<ImageOverlay />
			</MobileImageContainer>
		</Container>
	)
}
