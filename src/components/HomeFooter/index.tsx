import { FC } from 'react'
import { Container, ContentContainer, Logo, SocialMedias } from './styles'
import { SocialIcon } from 'react-social-icons'
import { FooterConsentments } from '@components/FooterConsentments'

export const HomeFooter: FC = () => {
	return (
		<Container>
			<ContentContainer>
				<Logo src='/logo-footer.svg' alt='talk-radio' width={80} height={80} />
				<h3>Siga a gente</h3>
				<p>
					Tenha sempre dicas de como impulsionar sua rádio e empreender atráves
					da nossa plataforma
				</p>

				<SocialMedias>
					<SocialIcon network='facebook' bgColor='#FFF' fgColor='#000' />
					<SocialIcon network='instagram' bgColor='#FFF' fgColor='#000' />
					<SocialIcon network='twitter' bgColor='#FFF' fgColor='#000' />
					<SocialIcon network='linkedin' bgColor='#FFF' fgColor='#000' />
				</SocialMedias>
			</ContentContainer>

			<FooterConsentments />
		</Container>
	)
}
