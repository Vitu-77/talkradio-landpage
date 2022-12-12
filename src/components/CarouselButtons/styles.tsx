import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0;

	@media (max-width: 768px) {
		margin-top: 50px;
	}

	@media (max-width: 512px) {
		display: none;
	}
`

export const Button = styled.button<{ disabled: boolean }>`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	outline: none;
	border-radius: 50%;
	background: var(--red-primary);
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

	&:nth-child(1) {
		margin-right: 10px;
	}

	&:nth-child(2) {
		margin-left: 10px;
	}
`
