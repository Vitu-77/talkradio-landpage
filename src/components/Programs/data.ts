import { CarouselItemProps } from '@components/Carousel'

import bg01 from '@assets/programs/_01.png'

export const programs: CarouselItemProps[] = [
	{
		description:
			'Informe seus ouvintes sobre os principais acontecimentos com as notícias exclusivas deste programa. Agronegócios, Política e Mercado Financeiro',
		title: 'Café Express',
		image: bg01,
		id: 1,
		sound: '/sounds/samples/_01.mp3',
	},
	{
		description:
			'O melhor da música Nacional e Internacional,, este programa é modular e possui até 5 horas de duração',
		title: 'Hits +Todos os Ritmos em um só lugar',
		image: bg01,
		id: 2,
		sound: '/sounds/samples/_02.wav',
	},
	{
		description: 'Informação, dicas e muita notícia.',
		title: 'Cai No LaçoOs Maiores Sucessos e Clássicos do Sertanejo',
		image: bg01,
		id: 3,
		sound: '/sounds/samples/_01.mp3',
	},
]
