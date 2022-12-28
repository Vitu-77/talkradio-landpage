import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--blue-primary);
	padding: 64px 0;
`

export const InnerContainer = styled.section`
	width: 1000px;
	max-width: 90vw;
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
