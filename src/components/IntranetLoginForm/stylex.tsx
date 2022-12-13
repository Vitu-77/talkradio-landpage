import styled from 'styled-components'

export const Container = styled.section`
	width: 100vw;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 60px 0;

	@media (max-width: 512px) {
		padding: 60px 24px;
	}
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 377px;

	@media (max-width: 512px) {
		width: 100%;
	}
`

export const TextZone = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > strong {
		color: var(--yellow-primary);
		margin-bottom: 12px;
		font-weight: 700;
		font-size: 18px;
	}

	& > h1 {
		color: var(--black);
		margin-bottom: 12px;
		font-weight: 700;
		font-size: 32px;
	}

	& > p {
		color: var(--gray);
		margin-bottom: 40px;
		font-weight: 400;
		font-size: 16px;
	}
`

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`
