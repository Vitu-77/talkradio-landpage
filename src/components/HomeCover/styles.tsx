import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	height: 100vh;
	position: relative;
	background-size: cover;
	background-position: bottom;

	@media (max-width: 768px) {
		height: calc(100vh - 80px);
	}
`

export const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: linear-gradient(
		165.58deg,
		rgba(193, 57, 53, 0.8) 1.13%,
		rgba(16, 43, 156, 0.5) 72.96%
	);
	z-index: 10;
`

export const TextSection = styled.article`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 0 156px 135px 156px;

	& h1 {
		color: #fff;
		font-weight: 700;
		font-size: 20px;
		margin-bottom: 24px;
		z-index: 30;
	}

	& h2 {
		width: 340px;
		color: #fff;
		font-weight: 700;
		font-size: 48px;
		margin-bottom: 24px;
		z-index: 30;
		line-height: 60px;
	}

	& p {
		width: 400px;
		color: #fff;
		font-weight: 400;
		font-size: 18px;
		margin-bottom: 56px;
		z-index: 30;
	}

	@media (max-width: 768px) {
		padding: 0 24px 64px 24px;

		& h1 {
			font-size: 18px;
		}

		& h2 {
			font-size: 32px;
			line-height: 40px;
		}

		& button {
			width: 100% !important;
		}
	}

	@media (max-width: 556px) {
		padding: 0 24px 64px 24px;

		& h1 {
			width: 100%;
		}

		& h2 {
			width: 100%;
		}

		& p {
			width: 100%;
		}

		& button {
			width: 100% !important;
		}
	}
`
