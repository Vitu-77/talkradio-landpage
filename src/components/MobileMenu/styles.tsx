import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.nav<{ isOpen: boolean }>`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	right: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
	z-index: 500000000;
	background: var(--white);
	display: none;
	transition: 200ms;

	& > ul {
		padding: 32px 24px;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`

export const Header = styled.header`
	width: 100%;
	margin-bottom: 24px;
	display: flex;
	justify-content: flex-end;
	padding: 24px;
`

export const Item = styled(Link)`
	width: 100%;
	list-style: none;
	padding: 24px;
	border-bottom: 1px solid var(--gray-light);
	cursor: pointer;
	text-decoration: none;

	& > span {
		font-weight: 700;
		font-size: 24px;
		text-decoration: none;
	}
`
