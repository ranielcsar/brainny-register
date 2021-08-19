import React from 'react'
import Colaborator from './Colaborator'

import { Body, HeadCell, BodyCell, Container, Head, Row, StyledTable } from './styles'

const data = [
  {
    colaborator: {
      name: 'João Silva',
      id: '001',
    },
    date: '12/10/21',
    hour: '9:00',
  },
  {
    colaborator: {
      name: 'Joana Silva',
      id: '002',
    },
    date: '12/10/21',
    hour: '11:00',
  },
  {
    colaborator: {
      name: 'Rio Silva',
      id: '003',
    },
    date: '12/10/21',
    hour: '8:00',
  },
]

const RegistersTable: React.FC = () => {
  return (
    <Container>
      <StyledTable>
        <Head>
          <Row>
            <HeadCell>
              <p>Colaborador</p> <p>Data</p> <p>Hora</p>
            </HeadCell>
          </Row>
        </Head>

        <Body>
          {data.map((item: any) => (
            <Row key={item.colaborator.id}>
              <Colaborator
                colaborator={item.colaborator}
                date={item.date}
                hour={item.hour}
              />
            </Row>
          ))}
        </Body>
      </StyledTable>
    </Container>
  )
}

export default RegistersTable
