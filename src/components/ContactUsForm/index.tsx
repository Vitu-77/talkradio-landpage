import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import { Button } from '@components/Button'
import { Input, MaskedInput } from '@components/Input'
import { Container, Form, FormContainer } from './styles'

import img from '@assets/contact-us-form.png'
import Image from 'next/image'
import { talkPlayApi } from '@http/talkPlayApi'

type Errors = {
	phone: boolean
	email: boolean
}

export const ContactUsForm = () => {
	const router = useRouter()
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [errors, setErrors] = useState<Errors | null>({
		phone: false,
		email: false,
	})

	const validateForm = useCallback((): Errors | null => {
		const errors: Errors = {
			phone: phone.length !== 11,
			email: !email || !email.includes('@'),
		}

		return errors.email || errors.phone ? errors : null
	}, [email, phone])

	const handleSubmit = useCallback(async () => {
		const errors = validateForm()
		setErrors(errors)

		if (errors) {
			return
		}

		setIsLoading(true)
		const data = { phone: phone.toString(), email, origin: 'TALK-RADIO' }

		try {
			await talkPlayApi.post('/contact-requests', data)

			alert(
				'Cadastro feito com sucesso, nossa equipe entrará em contato com você em breve.'
			)
			router.reload()
		} catch (error) {
			console.log(error)
		}

		setIsLoading(false)
	}, [validateForm, phone, email, router])

	const handleChangePhone = useCallback((value: string) => {
		setPhone(value.replaceAll(/[_ ()]/g, '').replaceAll('-', ''))
	}, [])

	return (
		<Container id='entre-em-contato'>
			<FormContainer>
				<h3>Nós falamos com você!</h3>
				<Form>
					<MaskedInput
						mask='(99) 9 9999-9999'
						label='Whatsapp'
						placeholder='DDD + Telefone'
						onChange={(value) => handleChangePhone(value)}
						style={{ marginBottom: '36px' }}
						error={errors?.phone ? 'Informe seu whatsapp' : undefined}
					/>

					<Input
						label='Seu melhor email'
						placeholder='Seu email'
						onChange={(value) => setEmail(value)}
						style={{ marginBottom: '36px' }}
						error={errors?.email ? 'Informe seu email corretamente' : undefined}
					/>

					<Button
						type='button'
						content='Enviar'
						variant='blue'
						onClick={handleSubmit}
						loading={isLoading}
					/>
				</Form>
			</FormContainer>

			<Image
				className='img'
				src={img}
				alt='talk-radio'
				width={img.width}
				height={img.height}
			/>
		</Container>
	)
}
