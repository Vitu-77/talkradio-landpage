import { AppProps } from 'next/app'
import { GlobalStyles } from '@styles/Global'
import { MibleMenuProvider } from '@contexts/MobileMenu'
import { MobileMenu } from '@components/MobileMenu'
import styled from 'styled-components'

const AppContainer = styled.main`
	width: 100%;
	height: 100%;
	position: relative;
`

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyles />
			<MibleMenuProvider>
				<AppContainer>
					<Component {...pageProps} />
					<MobileMenu />
				</AppContainer>
			</MibleMenuProvider>
		</>
	)
}
