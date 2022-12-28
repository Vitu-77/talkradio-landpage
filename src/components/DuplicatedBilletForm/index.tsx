import { FC, FormEvent, useCallback, useState } from 'react'
import { Button } from '@components/Button'
import { MaskedInput } from '@components/Input'
import {
	Container,
	Cover,
	Form,
	FormContainer,
	TextZone,
	Gradient,
} from './styles'

import coverBg from '@assets/duplicated-billet.png'
import { intranetApi } from '@http/intranetApi'

export type Billet = {
	ano: string
	data_vencimento: string
	link: string
	mes: string
	statusBoleto: string
	tipo: string
	valor: string
}

type Response = {
	cnpj: string
	bankSlips: Billet[]
}

type DuplicatedBilletFormProps = {
	setBillets: (billets: Billet[]) => void
}

export const DuplicatedBilletForm: FC<DuplicatedBilletFormProps> = ({
	setBillets,
}) => {
	const [cnpj, setCnpj] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleSetCNPJ = useCallback((cnpj: string) => {
		setCnpj(
			cnpj
				.replaceAll('-', '')
				.replaceAll('/', '')
				.replaceAll('.', '')
				.replaceAll('_', '')
		)
	}, [])

	const handleSubmit = useCallback(
		async (event?: FormEvent<HTMLFormElement>) => {
			event?.preventDefault()

			if (cnpj.length !== 14) {
				return alert('CNPJ inválido')
			}

			setIsLoading(true)

			try {
				const response = await intranetApi.get<Response>(`bank-slips/${cnpj}`)

				if (!response.data.bankSlips.length) {
					alert('Não foram encontrados boletos nesse CNPJ, confira os dados')
				}

				setBillets(response.data.bankSlips)
			} catch (error) {
				return alert('Erro ao buscar os boletos, confira o CNPJ')
			}

			setIsLoading(false)
		},
		[cnpj, setBillets]
	)

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

				<Form onSubmit={handleSubmit}>
					<MaskedInput
						mask='99.999.999/9999-99'
						variant='red'
						label='CNPJ'
						placeholder='Digite seu CNPJ'
						onChange={(value) => handleSetCNPJ(value)}
						style={{ marginBottom: '36px' }}
					/>

					<Button
						type='submit'
						content='Enviar'
						variant='red'
						loading={isLoading}
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
