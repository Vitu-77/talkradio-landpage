import {
	createContext,
	FC,
	ReactNode,
	useCallback,
	useContext,
	useState,
	useEffect,
} from 'react'

export type StartProps = {
	src: string
	id: number | string
} | null

export interface IPlayerContext {
	id: number | string | null
	src: string | null
	start?: (props: StartProps) => void
	stop?: () => void
}

export const PlayerContext = createContext<IPlayerContext>({
	id: null,
	src: null,
})

export const PlayerProvider: FC<{ children: ReactNode }> = (props) => {
	const [id, setId] = useState<number | string | null>(null)
	const [src, setSrc] = useState<string | null>(null)
	const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

	const stop = useCallback(() => {
		setAudio(null)
		setSrc('')

		if (audio) {
			audio.pause()
			audio.currentTime = 0
			setId(null)
		}
	}, [audio])

	const start = useCallback(
		(props: StartProps) => {
			if (!props) {
				stop()
			} else {
				stop()
				setId(props.id)
				setSrc(props.src)
			}
		},
		[stop]
	)

	useEffect(() => {
		if (src) {
			setAudio(new Audio(src))
		}
	}, [src])

	useEffect(() => {
		if (audio) {
			audio.play()
		}
	}, [audio])

	return (
		<PlayerContext.Provider value={{ id, src, start, stop }}>
			{props.children}
		</PlayerContext.Provider>
	)
}

export const usePlayer = () => {
	return useContext(PlayerContext)
}
