import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useCallback, useState } from 'react'
import { Container, Form, FormContainer, TextZone } from './stylex'

type Errors = {
	username: boolean
	password: boolean
}

export const IntranetLoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState<Errors>({
		password: false,
		username: false,
	})

	const validateForm = useCallback((): Errors | null => {
		const errors: Errors = {
			username: !username,
			password: !password,
		}

		return errors.password || errors.username ? errors : null
	}, [username, password])

	const handleSubmit = useCallback(() => {
		const errors = validateForm()

		if (errors) {
			return setErrors(errors)
		}

		const data = { username, password }

		console.log(data)
	}, [validateForm, username, password, errors])

	return (
		<Container>
			<FormContainer>
				<TextZone>
					<strong>Área de assinantes</strong>

					<h1>Intranet</h1>

					<p>Uso exclusivo das afiliadas Talk Radio.</p>
				</TextZone>

				<Form>
					<Input
						variant='yellow'
						label='Nome de usuário'
						placeholder='Digite seu usuário'
						onChange={(value) => setUsername(value)}
						style={{ marginBottom: '36px' }}
					/>

					<Input
						variant='yellow'
						type='password'
						label='Senha'
						placeholder='Digite sua senha'
						onChange={(value) => setPassword(value)}
						style={{ marginBottom: '36px' }}
					/>

					<Button
						type='button'
						content='Enviar'
						variant='yellow'
						onClick={handleSubmit}
					/>
				</Form>
			</FormContainer>
		</Container>
	)
}
