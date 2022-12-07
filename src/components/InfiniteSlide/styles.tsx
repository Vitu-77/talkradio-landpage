import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
`

export const Container = styled.div`
	width: 200%;
	height: 140px;
	overflow: hidden;
	position: relative;
`

export const InnerContainer = styled.div<{ direction: 'normal' | 'reverse' }>`
	width: 200%;
	height: 140px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: absolute;
	left: 0;
	animation: ${animation};
	animation-duration: 120s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
	animation-direction: ${({ direction }) => direction};

	@media (max-width: 768px) {
		animation-duration: 60s;
	}

	@media (max-width: 512px) {
		animation-duration: 30s;
	}
`

export const SlideItem = styled.div`
	height: 100%;
	width: 200px;
	min-width: 200px;
	background: var(--white);
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 24px;
`
