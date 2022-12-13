import React, { FC, useCallback } from 'react'
import { Container } from './styles'
import { BiLoaderAlt } from 'react-icons/bi'

export type ButtonVariants = 'white' | 'red' | 'yellow' | 'blue'

export type ButtonProps = {
	type?: 'button' | 'submit' | 'reset'
	variant: ButtonVariants
	content: string
	style?: React.CSSProperties
	loading?: boolean
	disabled?: boolean
	onClick?: () => any
}

enum Bg {
	WHITE = '#FFFF',
	BLUE = '#102B9C',
	RED = '#C13935',
	YELLOW = '#E7A62C',
}

enum Color {
	WHITE = '#FFFF',
	DARK = '#0D1317',
}

type GetStyleResponse = {
	bg: Bg
	color: Color
}

export const Button: FC<ButtonProps> = ({
	variant,
	content,
	onClick,
	style,
	type,
	disabled,
	loading,
}) => {
	const getStyle = useCallback((): GetStyleResponse => {
		switch (variant) {
			case 'blue':
				return { bg: Bg.BLUE, color: Color.WHITE }
			case 'red':
				return { bg: Bg.RED, color: Color.WHITE }
			case 'yellow':
				return { bg: Bg.YELLOW, color: Color.WHITE }
			case 'white':
				return { bg: Bg.WHITE, color: Color.DARK }
			default:
				return { bg: Bg.WHITE, color: Color.DARK }
		}
	}, [variant])

	const { bg, color } = getStyle()

	const handleClick = useCallback(() => {
		if (disabled || loading) {
			return
		}

		if (typeof onClick === 'function') {
			onClick()
		}
	}, [onClick, disabled, loading])

	return (
		<Container
			type={type}
			disabled={disabled || loading}
			onClick={() => handleClick()}
			style={{
				...(style ?? {}),
				backgroundColor: bg,
				color,
			}}>
			{loading && <BiLoaderAlt color='#FFF' size={25} />}
			{!loading && content}
		</Container>
	)
}
