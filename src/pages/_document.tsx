import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta charSet='utf-8' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Code+Pro:ital,wght@0,500;1,400;1,500&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
