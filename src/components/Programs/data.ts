import { CarouselItemProps } from '@components/Carousel'

import bg01 from '@assets/programs/_01.png'

export const programs: CarouselItemProps[] = [
	{
		title: 'Café Express',
		description:
			'Informe seus ouvintes sobre os principais acontecimentos com as notícias exclusivas deste programa. Agronegócios, Política e Mercado Financeiro',
		image: bg01,
		id: 1,
		sound: '/sounds/samples/_01.mp3',
	},
	{
		title: 'Hits +Todos os Ritmos em um só lugar',
		description:
			'O melhor da música nacional e internacional, este programa é modular e possui até 5 horas de duração',
		image: bg01,
		id: 2,
		sound: '/sounds/samples/_02.wav',
	},
	{
		title: 'Cai No Laço',
		description:
			'Os maiores sucessos e clássicos do sertanejo além de muitas dicas, notícias e informação',
		image: bg01,
		id: 3,
		sound: '/sounds/samples/_01.mp3',
	},
]
