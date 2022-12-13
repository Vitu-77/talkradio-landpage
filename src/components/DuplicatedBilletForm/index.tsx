import { Button } from '@components/Button'
import { MaskedInput } from '@components/Input'
import { useCallback, useState } from 'react'
import {
	Container,
	Cover,
	Form,
	FormContainer,
	TextZone,
	Gradient,
} from './styles'

import coverBg from '@assets/duplicated-billet.png'

export const DuplicatedBilletForm = () => {
	const [cnpj, setCnpj] = useState('')

	const handleSetCNPJ = useCallback((cnpj: string) => {
		setCnpj(cnpj.replaceAll(/./g, '').replaceAll(/-/g, '').replaceAll('/', ''))
	}, [])

	const handleSubmit = useCallback(async () => {
		console.log({ cnpj })
	}, [cnpj])

	return (
		<Container>
			<FormContainer>
				<TextZone>
					<strong>Área de assinantes</strong>
					<h1>2ª via de boletos</h1>
					<p>
						Os pagamentos realizados por boletos ou carnês são identificados em
						até 3 dias. Fale com a Talk Radio se quiser trocar para pagamento
						recorrente.
					</p>
				</TextZone>

				<Form>
					<MaskedInput
						mask='99.999.999/9999-99'
						variant='red'
						type='password'
						label='Senha'
						placeholder='Digite sua senha'
						onChange={(value) => handleSetCNPJ(value)}
						style={{ marginBottom: '36px' }}
					/>

					<Button
						type='button'
						content='Enviar'
						variant='red'
						onClick={handleSubmit}
					/>
				</Form>
			</FormContainer>

			<Cover style={{ backgroundImage: `url(${coverBg.src})` }}>
				<Gradient />
			</Cover>
		</Container>
	)
}
