import styled from 'styled-components'

export const Container = styled.section`
	background: var(--blue-primary);
	padding: 64px 156px;

	@media (max-width: 960px) {
		padding: 64px 96px;
	}

	@media (max-width: 768px) {
		padding: 64px 56px;
	}

	@media (max-width: 512px) {
		padding: 64px 26px;
	}
`

export const Header = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 64px;
	position: relative;

	& h2 {
		font-size: 32px;
		color: var(--white);
	}

	@media (max-width: 512px) {
		h2 {
			text-align: center;
		}
	}

	@media (max-width: 768px) {
		span.hidden {
			display: none;
		}
	}
`
