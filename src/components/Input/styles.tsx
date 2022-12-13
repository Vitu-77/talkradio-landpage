import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'

export const Container = styled.label`
	display: flex;
	flex-direction: column;
`

export const Label = styled.span`
	color: var(--black);
	font-size: 12px;
	font-weight: 700;
	margin-bottom: 5px;
`

export const Input = styled.input<{ variant: 'blue' | 'yellow' }>`
	width: 100%;
	border: 1px solid var(--gray);
	height: 48px;
	padding: 0 16px;
	border-radius: 8px;
	font-size: 15px;
	outline: none;
	cursor: pointer;
	transition: 300ms;

	&::placeholder {
		color: var(--gray);
		font-size: 15px;
	}

	${({ variant }) => {
		if (variant === 'blue') {
			return css`
				&:focus {
					border-color: var(--blue-primary);
					box-shadow: 0px 0px 1px 3px #102c9c45;
				}
			`
		}

		if (variant === 'yellow') {
			return css`
				&:focus {
					border-color: var(--yellow-primary);
					box-shadow: 0px 0px 1px 3px #e7a62c45;
				}
			`
		}
	}}
`

export const MaskedInput = styled(InputMask)<{ variant: 'blue' | 'yellow' }>`
	width: 100%;
	border: 1px solid var(--gray);
	height: 48px;
	padding: 0 16px;
	border-radius: 8px;
	font-size: 15px;
	outline: none;
	cursor: pointer;
	transition: 300ms;

	&::placeholder {
		color: var(--gray);
		font-size: 15px;
	}

	${({ variant }) => {
		if (variant === 'blue') {
			return css`
				&:focus {
					border-color: var(--blue-primary);
					box-shadow: 0px 0px 1px 3px #102c9c45;
				}
			`
		}

		if (variant === 'yellow') {
			return css`
				&:focus {
					border-color: var(--yellow-primary);
					box-shadow: 0px 0px 1px 3px #9a9c1045;
				}
			`
		}
	}}
`
