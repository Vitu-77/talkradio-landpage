import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    height: 100%;
  }

  50% {
    height: 20%;
  }

  100% {
    height: 100%;
  }
`

export const Container = styled.div`
	width: max-content;
	display: flex;
	align-items: center;
	height: 120px;
	z-index: 100;
`

export const Bar = styled.div`
	width: 10px;
	height: 120px;
	border-radius: 50px;
	background: #fff;
	margin: 0 5px;
	animation: ${animation};
	animation-duration: 1.3s;
	animation-iteration-count: infinite;

	&:nth-child(1) {
		animation-delay: 0s;
	}

	&:nth-child(2) {
		animation-delay: 0.3s;
	}

	&:nth-child(3) {
		animation-delay: 0.6s;
	}

	&:nth-child(4) {
		animation-delay: 0.9s;
	}

	&:nth-child(5) {
		animation-delay: 1.2s;
	}

	&:nth-child(6) {
		animation-delay: 1.5s;
	}

	&:nth-child(7) {
		animation-delay: 1.2s;
	}

	&:nth-child(8) {
		animation-delay: 0.9s;
	}

	&:nth-child(9) {
		animation-delay: 0.6s;
	}

	&:nth-child(10) {
		animation-delay: 0.3s;
	}

	&:nth-child(11) {
		animation-delay: 0s;
	}
`
