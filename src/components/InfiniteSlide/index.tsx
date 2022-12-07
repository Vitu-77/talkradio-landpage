import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import { Container, InnerContainer, SlideItem } from './styles'

export type Props = {
	images: StaticImageData[]
	direction?: 'normal' | 'reverse'
	style?: React.CSSProperties
}

export const InfiniteSlide: FC<Props> = ({ images, direction, style }) => {
	return (
		<Container style={style}>
			<InnerContainer direction={direction ?? 'normal'}>
				{images.map((img, i) => (
					<SlideItem key={i}>
						<Image src={img} alt={`afiliado-${i}`} />
					</SlideItem>
				))}

				{images.map((img, i) => (
					<SlideItem key={i}>
						<Image src={img} alt={`afiliado-${i}`} />
					</SlideItem>
				))}
			</InnerContainer>
		</Container>
	)
}
