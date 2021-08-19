import React from 'react'
import RegistersTable from 'components/RegistersTable'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <RegistersTable />
    </Container>
  )
}

export default Dashboard
