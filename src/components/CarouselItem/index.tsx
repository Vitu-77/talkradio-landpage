import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { BsPlayCircleFill, BsStopCircleFill } from 'react-icons/bs'

import { Button } from '@components/Button'
import { SoundEffect } from '@components/SoundEffect'
import { Container, Header, Body, Gradient } from './styles'
import { StartProps, usePlayer } from '@contexts/Player'
import { CarouselItemProps } from '@components/Carousel'

export const CarouselItem: FC<CarouselItemProps> = ({
	description,
	image,
	sound,
	title,
	id,
}) => {
	const player = usePlayer()
	const [isHovering, setIsHovering] = useState(false)

	const handlePlay = useCallback(
		(props: StartProps) => {
			console.log('AOSICJOASI')

			if (props && player.start) {
				player.start(props)
			}
		},
		[player]
	)

	const handleStop = useCallback(() => {
		if (player.stop) {
			player.stop()
		}
	}, [player])

	return (
		<Container>
			<Header
				onMouseOver={() => setIsHovering(true)}
				onMouseOut={() => setIsHovering(false)}
				style={{ backgroundImage: `url(${image.src})` }}>
				<Gradient />

				{player?.id === id ? (
					isHovering ? (
						<BsStopCircleFill
							onClick={() => handleStop()}
							style={{ zIndex: 100, cursor: 'pointer' }}
							color='#FFF'
							size={100}
						/>
					) : (
						<SoundEffect />
					)
				) : (
					<BsPlayCircleFill
						onClick={() => handlePlay({ src: sound, id })}
						style={{ zIndex: 100, cursor: 'pointer' }}
						color='#FFF'
						size={100}
					/>
				)}
			</Header>
			<Body>
				<div className='text-container'>
					<h4>{title}</h4>
					<p>{description}</p>
				</div>

				<Button variant='red' content='Quero esse programa na minha rádio' />
			</Body>
		</Container>
	)
}
