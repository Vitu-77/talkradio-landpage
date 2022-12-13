import { Header } from '@components/Header'
import { IntranetFooter } from '@components/IntranetFooter'
import { IntranetLoginForm } from '@components/IntranetLoginForm'
import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.main`
	height: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export default function LoginIntranet() {
	return (
		<Container>
			<Head>
				<title>Talk Rádio+ | Login na intranet</title>
				<meta
					name='description'
					content='Faça login na intranet, uso exclusivo das afiliadas Talk Radio.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<IntranetLoginForm />

			<IntranetFooter />
		</Container>
	)
}
