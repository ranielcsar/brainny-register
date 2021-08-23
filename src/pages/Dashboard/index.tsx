import React, { useEffect, useState } from 'react'
import RegistersTable from 'components/RegistersTable'
import { CircularProgress } from '@material-ui/core'
import { RegisterProps } from 'components/RegistersTable'
import { useQuery } from '@apollo/client'
import { GET_REGISTERED_TIMES } from 'services/querys'

import { Container } from './styles'

const Dashboard: React.FC = () => {
  const { data, loading, error } = useQuery(GET_REGISTERED_TIMES)
  const [registers, setRegisters] = useState([] as RegisterProps[])

  useEffect(() => {
    if (loading) console.log('Loading...')

    if (error) console.log(`Error! ${error.message}`)

    if (data) {
      setRegisters(() => data.registeredTimes)
    }
  }, [data])

  return (
    <Container>
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <RegistersTable registers={registers} />
      )}
    </Container>
  )
}

export default Dashboard
