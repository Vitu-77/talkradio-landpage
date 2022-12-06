import { FC } from 'react'
import { Container, Logo } from './styles'

export const Header: FC = () => {
	return (
		<Container>
			<Logo alt='talk-radio' src='/logo-header.svg' width={80} height={50} />
			<span>HEADddcdER</span>
		</Container>
	)
}
