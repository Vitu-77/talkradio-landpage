import styled from 'styled-components'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: center;
`

export const Copyright = styled.span`
	text-align: center;
	font-size: 15px;
	color: var(--gray);

	@media (max-width: 512px) {
		align-self: flex-start;
		text-align: left;
	}
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
		color: var(--gray);
		cursor: pointer;
	}

	@media (max-width: 512px) {
		flex-direction: column;
		align-items: flex-start;

		& > span {
			margin-bottom: 12px;
		}
	}
`
