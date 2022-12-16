import { CSSProperties, FC } from 'react'
import {
	Container,
	Input as StyledInput,
	MaskedInput as StyledMaskedInput,
	Label,
} from './styles'

export type InputProps = {
	label: string
	placeholder: string
	style?: CSSProperties
	variant?: 'blue' | 'yellow' | 'red'
	type?: string
	error?: string
	onChange: (value: string) => void
}

export type MaskedInputProps = InputProps & {
	mask: string
}

export const Input: FC<InputProps> = ({
	label,
	onChange,
	placeholder,
	style,
	variant,
	type,
	error,
}) => {
	return (
		<Container style={style}>
			<Label>{label}</Label>
			<StyledInput
				error={error}
				type={type ?? 'text'}
				variant={variant ?? 'blue'}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
			{error && <small>{error}</small>}
		</Container>
	)
}

export const MaskedInput: FC<MaskedInputProps> = ({
	label,
	mask,
	onChange,
	placeholder,
	style,
	variant,
	error,
	type,
}) => {
	return (
		<Container style={style}>
			<Label>{label}</Label>
			<StyledMaskedInput
				error={error}
				type={type}
				variant={variant ?? 'blue'}
				mask={mask}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
			{error && <small>{error}</small>}
		</Container>
	)
}
