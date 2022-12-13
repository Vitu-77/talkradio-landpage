import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.footer`
	width: 100%;
	background: var(--black);
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 80px 0 40px 0;

	@media (max-width: 512px) {
		padding: 80px 24px 40px 24px;
	}
`

export const Logo = styled(Image)`
	margin-bottom: 50px;
`

export const ContentContainer = styled.article`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 540px;
	margin-bottom: 80px;

	& h3 {
		color: var(--white);
		font-size: 64px;
		margin-bottom: 28px;
		font-weight: 700;
	}

	& p {
		color: var(--white);
		font-size: 18px;
		font-weight: 400;
		text-align: center;
	}

	@media (max-width: 512px) {
		width: 100%;
		margin-bottom: 60px;

		& h3 {
			font-size: 32px;
		}

		& p {
			/* width: 90vw; */
		}
	}
`

export const SocialMedias = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 55px;

	& > a {
		margin: 0 20px;
		cursor: pointer;
	}

	@media (max-width: 512px) {
		border-bottom: 1px solid #3d444e;
		width: 100%;
		padding-bottom: 50px;
	}
`
