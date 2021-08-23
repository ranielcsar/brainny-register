import React, { useEffect, useState, useContext } from 'react'
import RegistersTable from 'components/RegistersTable'
import NewRegisterDrawer from 'components/NewRegisterDrawer'

import { useQuery } from '@apollo/client'
import { GET_REGISTERED_TIMES } from 'services/querys'

import { Container, RegisterButton } from './styles'
import { RegisterProps } from 'components/RegistersTable'
import { CircularProgress } from '@material-ui/core'
import { ContextUser } from 'context'

const MyRegisters: React.FC = () => {
  const { data, loading, error } = useQuery(GET_REGISTERED_TIMES)
  const [registers, setRegisters] = useState([] as RegisterProps[])
  const { user } = useContext(ContextUser)
  const [openNewRegisterDrawer, setOpenNewRegisterDrawer] = useState(false)

  const handleOpenNewRegisterDrawer = () => {
    setOpenNewRegisterDrawer(!openNewRegisterDrawer)
  }

  useEffect(() => {
    if (loading) console.log('Loading...')

    if (error) console.log(`Error! ${error.message}`)

    if (data) {
      setRegisters(() => {
        const newRegisters = data.registeredTimes.filter(
          (registeredTime: any) => registeredTime.user.id === user?.id,
        )
        return newRegisters
      })
    }
  }, [data])

  return (
    <Container>
      <NewRegisterDrawer
        open={openNewRegisterDrawer}
        handleOpen={handleOpenNewRegisterDrawer}
      />

      <RegisterButton title="Registrar" onClick={handleOpenNewRegisterDrawer} />
      {loading ? (
        <CircularProgress color="inherit" />
      ) : (
        <RegistersTable registers={registers} />
      )}
    </Container>
  )
}

export default MyRegisters
