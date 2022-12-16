import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	height: 80px;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 32px;

	& span {
		font-family: var(--main-font);
	}

	& a {
		cursor: pointer;
		color: var(--blue-primary);
		font-size: 15px;
		font-weight: 700;
		text-decoration: none;
	}
`

export const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > div.divider {
		height: 20px;
		width: 1px;
		background: var(--blue-primary);
		opacity: 0.5;
		margin: 0 24px;
	}

	@media (max-width: 768px) {
		display: none;
	}
`

export const Logo = styled(Image)``

export const Dropdowns = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
`

export const Dropdown = styled.span`
	color: var(--black);
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 20px;
	cursor: pointer;
	font-weight: 500;

	&:hover {
		color: var(--blue-primary);
	}

	& > span {
		margin-right: 6px;
	}

	@media (max-width: 768px) {
		display: none;
	}
`

export const MobileMenuToggle = styled(FiMenu)`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`
