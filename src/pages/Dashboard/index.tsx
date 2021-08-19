import RegistersTable from 'components/RegistersTable'
import PageContainer from 'containers/PageContainer'
import React from 'react'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <RegistersTable />
      </Container>
    </PageContainer>
  )
}

export default Dashboard
