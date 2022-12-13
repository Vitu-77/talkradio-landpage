import { Button } from '@components/Button'
import { Input, MaskedInput } from '@components/Input'
import { useCallback, useState } from 'react'
import { Container, Form, FormContainer } from './styles'

import img from '@assets/contact-us-form.png'
import Image from 'next/image'

type Errors = {
	phone: boolean
	email: boolean
}

export const ContactUsForm = () => {
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [errors, setErrors] = useState({ phone: false, email: false })

	const validateForm = useCallback((): Errors | null => {
		const errors: Errors = {
			phone: phone.length !== 11,
			email: !email || !email.includes('@'),
		}

		return errors.email || errors.phone ? errors : null
	}, [email, phone])

	const handleSubmit = useCallback(() => {
		const errors = validateForm()

		if (errors) {
			return setErrors(errors)
		}

		const data = { phone, email }
	}, [validateForm, phone, email, errors])

	const handleChangePhone = useCallback((value: string) => {
		setPhone(value.replaceAll(/[_ ()]/g, '').replaceAll('-', ''))
	}, [])

	return (
		<Container>
			<FormContainer>
				<h3>Nós falamos com você!</h3>
				<Form>
					<MaskedInput
						mask='(99) 9 9999-9999'
						label='Whatsapp'
						placeholder='DDD + Telefone'
						onChange={(value) => handleChangePhone(value)}
						style={{ marginBottom: '36px' }}
					/>

					<Input
						label='Seu melhor email'
						placeholder='Seu email'
						onChange={(value) => setEmail(value)}
						style={{ marginBottom: '36px' }}
					/>

					<Button
						type='button'
						content='Enviar'
						variant='blue'
						onClick={handleSubmit}
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
