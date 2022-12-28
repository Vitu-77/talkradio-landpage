import { FC } from 'react'
import { Billet } from '@components/DuplicatedBilletForm'
import { Container, SeeBillet, Table, Tbody, Td, Th, Thead, Tr } from './styles'

type BilletsProps = {
	billets: Billet[]
}

export const Billets: FC<BilletsProps> = ({ billets }) => {
	if (!billets.length) {
		return null
	}

	return (
		<Container>
			<Table>
				<Thead>
					<Tr>
						<Th>Mês</Th>
						<Th>Ano</Th>
						<Th>Valor</Th>
						<Th>Vencimento</Th>
						<Th>Status</Th>
						<Th>Boleto</Th>
					</Tr>
				</Thead>
				<Tbody>
					{billets.map((billet, i) => (
						<Tr key={i}>
							<Td>{billet.mes}</Td>
							<Td>{billet.ano}</Td>
							<Td>{billet.valor}</Td>
							<Td>{billet.data_vencimento}</Td>
							<Td>{billet.statusBoleto}</Td>
							<Td>
								<SeeBillet
									href={billet.link}
									target='_blank'
									rel='noopener norefereer'>
									Ver boleto
								</SeeBillet>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</Container>
	)
}
