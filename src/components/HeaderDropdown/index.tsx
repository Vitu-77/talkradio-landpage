import { FC } from 'react'
import { Container, Item } from './styles'

import { IconType } from 'react-icons'

export type HeaderDropdownItem = {
	Icon: IconType
	title: string
	desc: string
	href: string
}

export type HeaderDropdownProps = {
	items: HeaderDropdownItem[]
}

export const HeaderDropdown: FC<HeaderDropdownProps> = ({ items }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<Item key={index}>
					<div className='icon'>
						<item.Icon color='#C13935' size={20} style={{ marginRight: 12 }} />
					</div>
					<div className='text'>
						<strong>{item.title}</strong>
						<span>{item.desc}</span>
					</div>
				</Item>
			))}
		</Container>
	)
}
