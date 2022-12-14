import { FC } from 'react'
import { Container, Overlay, TextSection } from './styles'

import bg from '@assets/home-cover.png'
import { Button } from '@components/Button'

export const HomeCover: FC = () => {
	return (
		<Container style={{ backgroundImage: `url(${bg.src})` }} id='inicio'>
			<Overlay />
			<TextSection>
				<h1>Talk Radio+</h1>
				<h2>De uma rádio para outra</h2>
				<p>
					Somos a TalkRadio+ uma empresa que cria soluções para o rádio,
					construida por quem sabe fazer e tem anos de mercado
				</p>
				<a className='ancor' href='#entre-em-contato' style={{ zIndex: 30 }}>
					<Button
						content='Solicite um orçamento'
						variant='white'
						style={{ zIndex: 30, width: 'max-content' }}
					/>
				</a>
			</TextSection>
		</Container>
	)
}
