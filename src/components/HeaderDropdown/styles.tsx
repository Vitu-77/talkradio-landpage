import styled from 'styled-components'

export const Container = styled.ul`
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: 300px;
	z-index: 100000;
	border-radius: 8px;
	background: var(--gray-light);
	padding: 8px;
`

export const Item = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	padding: 12px 15px;
	cursor: pointer;
	border-radius: 8px;

	&:hover {
		background-color: #e3e3e3;
	}

	& > div.icon {
		flex: 0.25;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	& > div.text {
		flex: 0.75;
		display: flex;
		flex-direction: column;

		& > strong {
			font-size: 15px;
			font-weight: 400;
			color: var(--black);
		}

		& > span {
			color: var(--gray);
			font-size: 12px;
			font-weight: 400;
			margin-top: 2px;
		}
	}
`
