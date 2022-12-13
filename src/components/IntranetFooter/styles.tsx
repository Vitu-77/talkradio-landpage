import styled from 'styled-components'

export const Container = styled.footer`
	width: 100%;
	background: var(--gray-light);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 42px 0 64px 0;

	@media (max-width: 512px) {
		padding: 42px 24px;
	}
`
