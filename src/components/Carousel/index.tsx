import React, { FC, useCallback, useEffect, useRef, useState } from 'react'

import { StaticImageData } from 'next/image'
import { useCarousel } from '@contexts/Carousel'
import { Container } from './styles'
import { CarouselItem } from '@components/CarouselItem'

export type CarouselItemProps = {
	title: string
	description: string
	image: StaticImageData
	sound: string
	id: number
}

export type CarouselProps = {
	page: number
	items: CarouselItemProps[]
}

const CARD_WIDTH = 450

export const Carousel: FC<CarouselProps> = ({ page, items }) => {
	const carousel = useCarousel()
	const ref = useRef<HTMLDivElement>(null)

	const handleScroll = useCallback(() => {
		if (carousel.updateButtonState) {
			const container = ref.current as HTMLDivElement
			const width = container.getBoundingClientRect().width
			const scrollWidth = container.scrollWidth
			const scroll = container.scrollLeft

			carousel.updateButtonState({ btn: 'PREV', state: false })
			carousel.updateButtonState({ btn: 'NEXT', state: false })

			if (Math.ceil(scroll + width) >= scrollWidth) {
				carousel.updateButtonState({
					btn: 'NEXT',
					state: true,
				})
			}

			if (scroll === 0) {
				carousel.updateButtonState({
					btn: 'PREV',
					state: true,
				})
			}
		}
	}, [carousel])

	useEffect(() => {
		if (ref.current) {
			ref.current.scrollLeft = CARD_WIDTH * (page - 1)
		}
	}, [page, ref])

	return (
		<Container ref={ref} onScroll={() => handleScroll()}>
			{items.map((item, index) => (
				<CarouselItem key={index} {...item} />
			))}
		</Container>
	)
}
