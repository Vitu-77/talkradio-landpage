import Head from 'next/head'

import { ContactUs } from '@components/ContactUs'
import { ContactUsForm } from '@components/ContactUsForm'
import { HomeFooter } from '@components/HomeFooter'
import { Header } from '@components/Header'
import { HomeCover } from '@components/HomeCover'
import { Partners } from '@components/Partners'
import { Programs } from '@components/Programs'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Talk Rádio +</title>
				<meta
					name='description'
					content='Somos a TalkRadio+ uma empresa que cria soluções para o rádio,
					construida por quem sabe fazer e tem anos de mercado'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<HomeCover />
			<ContactUs />
			<Programs />
			<Partners />
			<ContactUsForm />
			<HomeFooter />
		</div>
	)
}
