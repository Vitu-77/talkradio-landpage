import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { BsPlayCircleFill, BsStopCircleFill } from 'react-icons/bs'

import { Button } from '@components/Button'
import { SoundEffect } from '@components/SoundEffect'
import { Container, Header, Body, Gradient } from './styles'
import { StartProps, usePlayer } from '@contexts/Player'
import { Demo } from '@components/Programs'
import { settings } from '@settings/index'

export const CarouselItem: FC<Demo> = ({
	description,
	image,
	audio,
	title,
	_id,
}) => {
	const player = usePlayer()
	const [isHovering, setIsHovering] = useState(false)

	const handlePlay = useCallback(
		(props: StartProps) => {
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

	const imageSrc = `${settings.talkPlayApiUrl()}/public/uploads/${image}`
	const audioSrc = `${settings.talkPlayApiUrl()}/public/uploads/${audio}`

	return (
		<Container>
			<Header
				onMouseOver={() => setIsHovering(true)}
				onMouseOut={() => setIsHovering(false)}
				style={{ backgroundImage: `url(${imageSrc})` }}>
				<Gradient />

				{player?.id === _id ? (
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
						onClick={() => handlePlay({ src: audioSrc, id: _id })}
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

				<a className='ancor' href='#entre-em-contato'>
					<Button variant='red' content='Quero esse programa na minha rádio' />
				</a>
			</Body>
		</Container>
	)
}
