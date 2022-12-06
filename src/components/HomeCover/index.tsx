import { FC } from 'react'
import { Container, Gradient, TextSection } from './styles'

import bg from '@assets/home-cover.png'
import { Button } from '@components/Button'

export const HomeCover: FC = () => {
	return (
		<Container style={{ backgroundImage: `url(${bg.src})` }}>
			<Gradient />
			<TextSection>
				<h1>Talk Radio+</h1>
				<h2>De uma rádio para outra</h2>
				<p>
					Somos a TalkRadio+ uma empresa que cria soluções para o rádio,
					construida por quem sabe fazer e tem anos de mercado
				</p>
				<Button
					onClick={() => console.log('OIASCOIJ')}
					content='Solicite um orçamento'
					variant='white'
					style={{ zIndex: 30, width: 'max-content' }}
				/>
			</TextSection>
		</Container>
	)
}
