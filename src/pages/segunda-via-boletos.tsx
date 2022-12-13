import { DuplicatedBilletForm } from '@components/DuplicatedBilletForm'
import { Header } from '@components/Header'
import { IntranetFooter } from '@components/IntranetFooter'
import Head from 'next/head'
import styled from 'styled-components'

const Container = styled.main`
	height: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export default function DuplicateBillet() {
	return (
		<>
			<Head>
				<title>Segunda via de boletos</title>
				<meta
					name='description'
					content='Os pagamentos realizados por boletos ou carnês são identificados em até 3 dias. Fale com a Talk Radio se quiser trocar para pagamento recorrente.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container>
				<Header />
				<DuplicatedBilletForm />

				<IntranetFooter />
			</Container>
		</>
	)
}
