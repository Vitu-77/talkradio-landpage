import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.header`
	width: 100%;
	height: 80px;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& span {
		font-family: var(--main-font);
	}
`

export const Logo = styled(Image)`
	margin-left: 32px;
`
