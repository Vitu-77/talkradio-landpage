import styled from 'styled-components'

export const Container = styled.article`
	width: 450px;
	min-width: 450px;
	max-width: 450px;
	height: 735px;
	max-height: 735px;
	border: 2px solid var(--white);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	margin-right: 24px;

	@media (max-width: 768px) {
		width: 360px;
		min-width: 360px;
		max-width: 360px;
	}

	@media (max-width: 512px) {
		width: 300px;
		min-width: 300px;
		max-width: 300px;
	}
`

export const Header = styled.header`
	position: relative;
	width: 100%;
	height: 40%;
	border-radius: 6px 6px 0 0;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Gradient = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	border-radius: 6px 6px 0 0;
	z-index: 20;
	background: linear-gradient(
		0deg,
		rgba(193, 57, 53, 0.25),
		rgba(193, 57, 53, 0.25)
	);
`

export const Body = styled.section`
	width: 100%;
	height: 60%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;

	& > div.text-container {
		display: flex;
		flex-direction: column;

		& > h4 {
			color: var(--white);
			margin-bottom: 24px;
			font-size: 36px;
			font-weight: 600;
			line-height: 50px;
		}

		& > p {
			color: var(--white);
			font-size: 15px;
			font-weight: 400;
		}
	}

	& > button {
		width: 100%;
		font-size: 13px;
		font-weight: 500;
	}

	@media (max-width: 512px) {
		& div.text-container > h4 {
			font-size: 24px;
			line-height: 34px;
		}

		& button {
			font-size: 12px;
			padding-left: 12px !important;
			padding-right: 12px !important;
		}
	}
`
