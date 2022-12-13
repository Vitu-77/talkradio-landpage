import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	background: var(--white);
	padding: 40px 0;
	display: flex;
	align-items: center;
	justify-content: center;

	.img {
		margin-left: 40px;
		margin-bottom: -40px;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		.img {
			margin-left: 0;
			margin-top: 20px;
		}
	}
`

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;

	& > h3 {
		margin-bottom: 40px;
		color: var(--black);
		font-size: 32px;
	}
`

export const Form = styled.form`
	width: 377px;
	display: flex;
	flex-direction: column;
`
