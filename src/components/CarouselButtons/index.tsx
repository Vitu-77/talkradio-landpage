import { useCarousel } from '@contexts/Carousel'
import { FC, useCallback } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Container, Button } from './styles'

export type CarouselButtonsProps = {
	onNext: () => void
	onPrev: () => void
}

export const CarouselButtons: FC<CarouselButtonsProps> = ({
	onNext,
	onPrev,
}) => {
	const { isNextBtnDisabeld, isPrevBtnDisabeld } = useCarousel()

	const handleClick = useCallback((disabled: boolean, callback: () => void) => {
		if (disabled) {
			return
		}

		return callback()
	}, [])

	return (
		<Container>
			<Button
				disabled={isPrevBtnDisabeld}
				onClick={() => handleClick(isPrevBtnDisabeld, onPrev)}>
				<FiArrowLeft color='#FFF' size={25} />
			</Button>
			<Button
				disabled={isNextBtnDisabeld}
				onClick={() => handleClick(isNextBtnDisabeld, onNext)}>
				<FiArrowRight color='#FFF' size={25} />
			</Button>
		</Container>
	)
}
