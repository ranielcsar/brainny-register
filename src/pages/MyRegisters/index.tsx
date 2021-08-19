import React from 'react'
import RegistersTable from 'components/RegistersTable'

import { Container, RegisterButton } from './styles'
import NewRegisterDrawer from 'components/NewRegisterDrawer'

const MyRegisters: React.FC = () => {
  return (
    <Container>
      <NewRegisterDrawer />
      <RegisterButton title="Registrar" />
      <RegistersTable />
    </Container>
  )
}

export default MyRegisters
