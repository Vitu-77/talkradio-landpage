import styled from 'styled-components'

export const Container = styled.section`
	background-color: var(--gray-light);
	padding: 64px 0;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const InnerContainer = styled.section`
	width: 1000px;
	max-width: 90vw;
	display: flex;
	flex-direction: column;
	align-items: center;

	& h2 {
		font-size: 32px;
		color: var(--black);
		margin-bottom: 64px;
	}

	@media (max-width: 1300px) {
		width: 100%;
		max-width: 100%;
	}
`
