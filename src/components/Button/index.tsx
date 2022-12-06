import React, { FC, useCallback } from 'react'
import { Container } from './styles'

export type ButtonVariants = 'white' | 'red' | 'yellow' | 'blue'

export interface ButtonProps {
	variant: ButtonVariants
	content: string
	style?: React.CSSProperties
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

	return (
		<Container
			onClick={onClick && onClick}
			style={{
				...(style ?? {}),
				backgroundColor: bg,
				color,
			}}>
			{content}
		</Container>
	)
}
