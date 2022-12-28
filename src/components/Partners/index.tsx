import { InfiniteSlide } from '@components/InfiniteSlide'
import { FC } from 'react'
import { Container, InnerContainer } from './styles'

import img01 from '../../../public/partners/01.png'
import img02 from '../../../public/partners/02.png'
import img03 from '../../../public/partners/03.png'
import img04 from '../../../public/partners/04.png'
import img05 from '../../../public/partners/05.png'
import img06 from '../../../public/partners/06.png'
import img07 from '../../../public/partners/07.png'
import img08 from '../../../public/partners/08.png'
import img09 from '../../../public/partners/09.png'
import img10 from '../../../public/partners/10.png'
import img11 from '../../../public/partners/11.png'
import img12 from '../../../public/partners/12.png'
import img13 from '../../../public/partners/13.png'

const images = [
	img01,
	img02,
	img03,
	img04,
	img05,
	img06,
	img07,
	img08,
	img09,
	img10,
	img11,
	img12,
	img13,
]

export const Partners: FC = () => {
	return (
		<Container id='parceiros'>
			<InnerContainer>
				<h2>Nossas afiliadas</h2>

				<InfiniteSlide images={images} />
				<InfiniteSlide
					images={images}
					style={{ marginTop: '50px' }}
					direction='reverse'
				/>
			</InnerContainer>
		</Container>
	)
}
