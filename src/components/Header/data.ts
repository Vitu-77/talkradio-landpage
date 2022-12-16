import {
	HiOutlineAdjustments,
	HiOutlineLightningBolt,
	HiOutlinePaperAirplane,
	HiOutlineUserAdd,
	HiOutlineUserCircle,
	HiOutlineUserGroup,
	HiOutlineWifi,
} from 'react-icons/hi'
import { HeaderDropdownItem } from '@components/HeaderDropdown'

export const talkPlayMenuItems: HeaderDropdownItem[] = [
	{
		Icon: HiOutlineLightningBolt,
		desc: 'Conheça nossas principais funcionalidades',
		title: 'Recursos',
		href: 'https://talkplay.com.br#recursos',
	},
	{
		Icon: HiOutlineAdjustments,
		desc: 'Veja o porquê você deve usar nossa plataforma',
		title: 'Funcionalidades',
		href: 'https://talkplay.com.br#funcionalidades',
	},
	{
		Icon: HiOutlineUserAdd,
		desc: 'Saiba como começar a ser uma rádio e produtor inteligente',
		title: 'Como aderir',
		href: 'https://talkplay.com.br#como-aderir',
	},
	{
		Icon: HiOutlinePaperAirplane,
		desc: 'Nós falaremos com você',
		title: 'Contato',
		href: 'https://talkplay.com.br#contato',
	},
]

export const talkRadioMenuItems: HeaderDropdownItem[] = [
	{
		Icon: HiOutlineUserCircle,
		title: 'Cliente VIP',
		desc: 'Conte com nossa produtora para alavancar a sua rádio',
		href: '/#entramos-em-contato',
	},
	{
		Icon: HiOutlineWifi,
		title: 'Programas',
		desc: 'Conheça nossa programação',
		href: '/#programas',
	},
	{
		Icon: HiOutlineUserGroup,
		title: 'Parceiros',
		desc: 'Veja quem já utiliza os benefícios Talk Radio +',
		href: '/#parceiros',
	},
	{
		Icon: HiOutlinePaperAirplane,
		title: 'Contato',
		desc: 'Entramos em contato com você',
		href: '/#entre-em-contato',
	},
]
