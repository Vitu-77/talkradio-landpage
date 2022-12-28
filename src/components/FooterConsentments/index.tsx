import { Container, ConsentmentsArea, Copyright } from './styles'

export const FooterConsentments = () => {
	return (
		<Container>
			<Copyright>© 2004 Talk Radio todos os direitos reservados</Copyright>

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
