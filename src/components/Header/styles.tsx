import Image from 'next/image'
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
	}
`

export const Logo = styled(Image)``

export const Links = styled.div`
	display: flex;
	align-items: center;
`

export const Link = styled.span`
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
`
