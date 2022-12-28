import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	padding: 32px 150px;
`

export const Table = styled.table`
	width: 100%;
`

export const Tr = styled.tr`
	width: 100%;
`

export const Td = styled.td`
	padding: 4px;
	border-radius: 8px;
	border: 1px solid #dedede;
	text-align: center;
	color: var(--gray);
`

export const Th = styled.td`
	text-align: center;
	font-weight: 700;
	font-size: 14px;
	padding-bottom: 10px;
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const SeeBillet = styled.a`
	font-size: 16px;
	font-weight: 500;
	color: var(--red-primary);
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`
