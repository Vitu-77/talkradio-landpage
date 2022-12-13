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
	variant?: 'blue' | 'yellow'
	type?: string
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
}) => {
	return (
		<Container style={style}>
			<Label>{label}</Label>
			<StyledInput
				type={type ?? 'text'}
				variant={variant ?? 'blue'}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
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
}) => {
	return (
		<Container style={style}>
			<Label>{label}</Label>
			<StyledMaskedInput
				variant={variant ?? 'blue'}
				mask={mask}
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
			/>
		</Container>
	)
}
