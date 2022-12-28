import { FC, useCallback, useEffect, useState } from 'react'

import { Carousel } from '@components/Carousel'
import { CarouselProvider } from '@contexts/Carousel'
import { CarouselButtons } from '@components/CarouselButtons'
import { talkPlayApi } from '@http/talkPlayApi'

import { Container, Header, InnerContainer } from './styles'
import { PlayerProvider } from '@contexts/Player'

export type Demo = {
	_id: string
	title: string
	description: string
	image: string
	audio: string
	__v: number
}

export const Programs: FC = () => {
	const [page, setPage] = useState(1)
	const [demos, setDemos] = useState<Demo[]>([])

	const fetchDemos = useCallback(async () => {
		try {
			const { data } = await talkPlayApi.get<{ demos: Demo[] }>(
				'/talk-play-program-demos'
			)
			setDemos(data.demos)
		} catch (error) {
			alert('Houve um erro ao buscar as demos de programas')
		}
	}, [])

	useEffect(() => {
		fetchDemos()
	}, [fetchDemos])

	return (
		<Container id='programas'>
			<PlayerProvider>
				<CarouselProvider>
					<InnerContainer>
						<Header>
							<span className='hidden'></span>
							<h2>Conheça nossos programas</h2>
							<CarouselButtons
								onPrev={() => setPage(page - 1)}
								onNext={() => setPage(page + 1)}
							/>
						</Header>

						<Carousel page={page} demos={demos} />
					</InnerContainer>
				</CarouselProvider>
			</PlayerProvider>
		</Container>
	)
}
