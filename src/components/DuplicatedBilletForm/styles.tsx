import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	height: 100%;
	padding: 60px 156px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: 1300px) {
		padding: 60px 80px;
	}

	@media (max-width: 1000px) {
		padding: 60px;
		justify-content: space-between;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 60px 0 0 0;
	}
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 377px;

	@media (max-width: 1000px) {
		width: 300px;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 0 60px 60px 60px;
	}

	@media (max-width: 512px) {
		padding: 0 24px 60px 24px;
	}
`

export const TextZone = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	& > strong {
		color: var(--red-primary);
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

export const Cover = styled.div`
	width: 552px;
	height: 552px;
	border-radius: 8px;
	position: relative;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@media (max-width: 1300px) {
		width: 452px;
		height: 452px;
	}

	@media (max-width: 1000px) {
		width: 352px;
		height: 352px;
	}

	@media (max-width: 768px) {
		width: 100%;
		height: 320px;
		border-radius: 0;
	}
`

export const Gradient = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 6px;
	z-index: 20;
	background: linear-gradient(
		0deg,
		rgba(193, 57, 53, 0.25),
		rgba(193, 57, 53, 0.25)
	);
`
