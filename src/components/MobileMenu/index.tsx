import { useMobileMenu } from '@contexts/MobileMenu'
import Link from 'next/link'
import { Container, Header, Item } from './styles'

import { FiX } from 'react-icons/fi'

export const MobileMenu = () => {
	const { isOpen, toggle } = useMobileMenu()

	return (
		<Container isOpen={isOpen}>
			<Header>
				<FiX size={25} color='#000' onClick={toggle} />
			</Header>
			<ul>
				<Item onClick={toggle} href='/'>
					<span>Início</span>
				</Item>
				<Item onClick={toggle} href='/login-intranet'>
					<span>Login intranet</span>
				</Item>
				<Item onClick={toggle} href='/segunda-via-boletos'>
					<span>2ª vida de boletos</span>
				</Item>
			</ul>
		</Container>
	)
}
