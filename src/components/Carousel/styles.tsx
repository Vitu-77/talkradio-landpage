import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	overflow-x: auto;
	scroll-behavior: smooth;
	position: relative;

	/* width */
	::-webkit-scrollbar {
		height: 0;
		width: 0;
	}
`
