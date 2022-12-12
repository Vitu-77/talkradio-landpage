import { FC, useState } from 'react'

import { Carousel } from '@components/Carousel'
import { CarouselProvider } from '@contexts/Carousel'
import { CarouselButtons } from '@components/CarouselButtons'

import { programs } from './data'
import { Container, Header } from './styles'
import { PlayerProvider } from '@contexts/Player'

export const Programs: FC = () => {
	const [page, setPage] = useState(1)

	return (
		<Container>
			<PlayerProvider>
				<CarouselProvider>
					<Header>
						<span className='hidden'></span>
						<h2>Conheça nossos programas</h2>
						<CarouselButtons
							onPrev={() => setPage(page - 1)}
							onNext={() => setPage(page + 1)}
						/>
					</Header>

					<Carousel page={page} items={programs} />
				</CarouselProvider>
			</PlayerProvider>
		</Container>
	)
}
