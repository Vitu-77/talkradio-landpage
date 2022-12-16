import {
	createContext,
	FC,
	ReactNode,
	useCallback,
	useContext,
	useState,
} from 'react'

export type IMobileMenuContext = {
	isOpen: boolean
	toggle?: () => void
}

export const MobileMenuContext = createContext<IMobileMenuContext>({
	isOpen: false,
})

export const MibleMenuProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = useCallback(() => {
		setIsOpen((isOpen) => !isOpen)
	}, [])

	return (
		<MobileMenuContext.Provider value={{ isOpen, toggle }}>
			{children}
		</MobileMenuContext.Provider>
	)
}

export const useMobileMenu = () => {
	return useContext(MobileMenuContext)
}
