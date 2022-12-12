import {
	createContext,
	FC,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react'

export interface ICarouselContext {
	isNextBtnDisabeld: boolean
	isPrevBtnDisabeld: boolean
	updateButtonState?: (props: UpdateBtnStateProps) => void
}

export type UpdateBtnStateProps = {
	btn: 'NEXT' | 'PREV'
	state: boolean
}

export const CarouselContext = createContext<ICarouselContext>({
	isPrevBtnDisabeld: true,
	isNextBtnDisabeld: false,
})

export const CarouselProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [isPrevBtnDisabeld, setIsPrevBtnDisabeld] = useState(true)
	const [isNextBtnDisabeld, setIsNextBtnDisabled] = useState(false)

	const updateButtonState = useCallback(
		({ btn, state }: UpdateBtnStateProps) => {
			if (btn === 'NEXT') {
				setIsNextBtnDisabled(state)
			} else {
				setIsPrevBtnDisabeld(state)
			}
		},
		[setIsNextBtnDisabled, setIsPrevBtnDisabeld]
	)

	return (
		<CarouselContext.Provider
			value={{
				isNextBtnDisabeld,
				isPrevBtnDisabeld,
				updateButtonState,
			}}>
			{children}
		</CarouselContext.Provider>
	)
}

export const useCarousel = () => {
	return useContext(CarouselContext)
}
