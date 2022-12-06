import { FC } from 'react'
import {
	ConsentmentsArea,
	Container,
	ContentContainer,
	Copyright,
	Logo,
	SocialMedias,
} from './styles'
import { SocialIcon } from 'react-social-icons'

export const Footer: FC = () => {
	const year = new Date().getUTCFullYear()

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

			<Copyright>© {year} Talk Radio todos os direitos reservados</Copyright>

			<ConsentmentsArea>
				<span>Termos de Uso</span>
				<span>Política de Privacidade</span>
				<span>
					Política Corporativa de Segurança da Informação e Cibernética
				</span>
				<span>Cookies que Utilizamos</span>
			</ConsentmentsArea>
		</Container>
	)
}
