import { FC, useState } from 'react'
import NextLink from 'next/link'
import { Container, Dropdowns, Dropdown, Logo, Links } from './styles'
import { FiChevronDown } from 'react-icons/fi'
import {
	HiOutlineAdjustments,
	HiOutlineLightningBolt,
	HiOutlineUserAdd,
	HiOutlinePaperAirplane,
} from 'react-icons/hi'
import { HeaderDropdown } from '@components/HeaderDropdown'

export const Header: FC = () => {
	const [visibleMenus, setVisibleMenus] = useState({
		play: false,
		radio: false,
	})

	return (
		<Container>
			<Logo alt='talk-radio' src='/logo-header.svg' width={80} height={50} />

			<Dropdowns>
				<Dropdown>
					<span>Talk Rádio</span>
					<FiChevronDown />
				</Dropdown>

				<Dropdown
					onMouseOver={() => setVisibleMenus({ ...visibleMenus, radio: true })}
					onMouseOut={() => setVisibleMenus({ ...visibleMenus, radio: false })}>
					<span>Talk Play</span>
					<FiChevronDown />

					{visibleMenus.radio && (
						<HeaderDropdown
							items={[
								{
									Icon: HiOutlineLightningBolt,
									desc: 'Conheça nossas principais funcionalidades',
									title: 'Recursos',
									href: 'ascasc',
								},
								{
									Icon: HiOutlineAdjustments,
									desc: 'Veja o porquê você deve usar nossa plataforma',
									title: 'Funcionalidade',
									href: 'ascasc',
								},
								{
									Icon: HiOutlineUserAdd,
									desc: 'Saiba como começar a ser uma rádio e produtor inteligente',
									title: 'Como aderir',
									href: 'ascasc',
								},
								{
									Icon: HiOutlinePaperAirplane,
									desc: 'Nós falaremos com você',
									title: 'Contato',
									href: 'ascasc',
								},
							]}
						/>
					)}
				</Dropdown>
			</Dropdowns>

			<Links>
				<NextLink href='/login-intranet'>Login na intranet</NextLink>
				<div className='divider'></div>
				<NextLink href='/segunda-via-boletos'>2ª via de boletos</NextLink>
			</Links>
		</Container>
	)
}
