import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.footer`
	width: 100%;
	background: var(--black);
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 80px 0 40px 0;
`

export const Logo = styled(Image)`
	margin-bottom: 50px;
`

export const ContentContainer = styled.article`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 540px;
	margin-bottom: 120px;

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
`

export const SocialMedias = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 55px;

	& > a {
		margin: 0 20px;
		cursor: pointer;
	}
`

export const Copyright = styled.span`
	text-align: center;
	font-size: 15px;
	color: var(--grey);
`

export const ConsentmentsArea = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 60px;

	& span {
		text-decoration: underline;
		font-weight: 400;
		font-size: 12px;
		color: grey;
		cursor: pointer;
	}
`
