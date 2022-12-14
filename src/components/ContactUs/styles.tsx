import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const InnerContainer = styled.section`
	width: 1000px;
	max-width: 90vw;
	background: var(--white);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 45px 0;

	@media (max-width: 1300px) {
		width: 100%;
		max-width: 100%;
		padding: 32px 64px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0;
	}
`

export const TextSection = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;

	& h4 {
		color: var(--red-primary);
		font-weight: 700;
		font-size: 18px;
		margin-bottom: 24px;
	}

	& h2 {
		color: var(--black);
		font-weight: 700;
		font-size: 48px;
		line-height: 55px;
		width: 450px;
		margin-bottom: 16px;
	}

	& p {
		color: var(--gray);
		font-weight: 400;
		font-size: 16px;
		width: 400px;
		margin-bottom: 48px;
	}

	@media (max-width: 768px) {
		padding: 86px 24px;

		& h4 {
			font-size: 20px;
		}

		& h2 {
			font-size: 32px;
			width: 100%;
			line-height: 40px;
		}

		& p {
			margin-bottom: 32px;
			width: 100%;
		}
	}
`

export const ImageContainer = styled.div`
	width: 450px;
	height: 450px;
	border-radius: 8px;
	position: relative;

	@media (max-width: 768px) {
		display: none;
	}
`

export const ImageBg = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 8px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

export const ImageOverlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: linear-gradient(
		0deg,
		rgba(193, 57, 53, 0.25),
		rgba(193, 57, 53, 0.25)
	);
`

export const MobileImageBg = styled.div`
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`

export const MobileImageContainer = styled.div`
	display: none;
	position: relative;
	width: 100%;
	height: 250px;

	@media (max-width: 768px) {
		display: block;
	}
`
