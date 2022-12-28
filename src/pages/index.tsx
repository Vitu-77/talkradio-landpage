import Head from 'next/head'
import Script from 'next/script'

import { ContactUs } from '@components/ContactUs'
import { ContactUsForm } from '@components/ContactUsForm'
import { HomeFooter } from '@components/HomeFooter'
import { Header } from '@components/Header'
import { HomeCover } from '@components/HomeCover'
import { Partners } from '@components/Partners'
import { Programs } from '@components/Programs'
import { Scripts } from '@components/Scripts'

export default function Home() {
	return (
		<>
			<Head>
				<title>Talk Radio+</title>
				<meta
					name='description'
					content='Somos a TalkRadio+ uma empresa que cria soluções para o rádio,
					construida por quem sabe fazer e tem anos de mercado'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Scripts />
			<Header />
			<HomeCover />
			<ContactUs />
			<Programs />
			<Partners />
			<ContactUsForm />
			<HomeFooter />
		</>
	)
}
