import React from 'react'
import Register from './Register'

import { Body, HeadCell, Container, Head, Row, StyledTable } from './styles'

export type RegisterProps = {
  id: string
  timeRegistered: Date
  user: {
    id: string
    name: string
  }
}

type Props = {
  registers: RegisterProps[]
}

const RegistersTable: React.FC<Props> = ({ registers }) => {
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
          {registers.map((register) => {
            const timeRegisteredToNewDate = register.timeRegistered
              ? new Date(register.timeRegistered)
              : null

            return (
              <Row key={register.id}>
                <Register
                  user={register.user}
                  date={timeRegisteredToNewDate}
                  hour={timeRegisteredToNewDate}
                />
              </Row>
            )
          })}
        </Body>
      </StyledTable>
    </Container>
  )
}

export default RegistersTable
