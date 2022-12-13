import styled, { keyframes, css } from 'styled-components'

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.button<{ disabled?: boolean }>`
	height: 56px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0 24px;
	font-size: 16px;
	font-weight: 700;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	outline: none;

	& svg {
		animation: ${animation};
		animation-iteration-count: infinite;
		animation-duration: 1s;
	}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none !important;
			opacity: 0.7;
		`}
`
