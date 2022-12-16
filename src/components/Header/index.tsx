import { FC, useState } from 'react'
import NextLink from 'next/link'
import {
	Container,
	Dropdowns,
	Dropdown,
	Logo,
	Links,
	MobileMenuToggle,
} from './styles'
import { FiChevronDown } from 'react-icons/fi'
import { HeaderDropdown } from '@components/HeaderDropdown'
import { useMobileMenu } from '@contexts/MobileMenu'
import { talkPlayMenuItems, talkRadioMenuItems } from './data'

export const Header: FC = () => {
	const { toggle } = useMobileMenu()
	const [visibleMenus, setVisibleMenus] = useState({
		play: false,
		radio: false,
	})

	return (
		<Container>
			<Logo alt='talk-radio' src='/logo-header.svg' width={80} height={50} />

			<Dropdowns>
				<Dropdown
					onMouseOver={() => setVisibleMenus({ ...visibleMenus, radio: true })}
					onMouseOut={() => setVisibleMenus({ ...visibleMenus, radio: false })}>
					<span>Talk Rádio</span>
					<FiChevronDown />

					{visibleMenus.radio && <HeaderDropdown items={talkRadioMenuItems} />}
				</Dropdown>

				<Dropdown
					onMouseOver={() => setVisibleMenus({ ...visibleMenus, play: true })}
					onMouseOut={() => setVisibleMenus({ ...visibleMenus, play: false })}>
					<span>Talk Play</span>
					<FiChevronDown />

					{visibleMenus.play && <HeaderDropdown items={talkPlayMenuItems} />}
				</Dropdown>
			</Dropdowns>

			<Links>
				<NextLink href='/login-intranet'>Login na intranet</NextLink>
				<div className='divider'></div>
				<NextLink href='/segunda-via-boletos'>2ª via de boletos</NextLink>
			</Links>

			<MobileMenuToggle size={25} color='#000' onClick={toggle} />
		</Container>
	)
}
