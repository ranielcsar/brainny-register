import React, { BaseSyntheticEvent, useState } from 'react'
import NewRegisterDrawer from 'components/NewRegisterDrawer'
import { useMutation } from '@apollo/client'
import { CREATE_REGISTERED_TIME } from 'services/querys'
import { RegisterButton } from './styles'
import { useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { useAuth } from 'context'

const NewRegister: React.FC = () => {
  const [newDate, setNewDate] = useState(new Date())
  const [openNewRegisterDrawer, setOpenNewRegisterDrawer] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const { user } = useAuth()

  const handleOpenNewRegisterDrawer = () => {
    setOpenNewRegisterDrawer(!openNewRegisterDrawer)
  }

  const [createRegisteredTime, { loading, data, error }] =
    useMutation(CREATE_REGISTERED_TIME)

  const handleNewDate = (event: BaseSyntheticEvent) => {
    const newDate = new Date(event.target.value)

    setNewDate(newDate)
  }

  const handleNewRegister = async () => {
    try {
      const loginOptions = {
        variables: {
          dateTime: {
            timeRegistered: newDate,
            user: user?.id,
          },
        },
      }

      await createRegisteredTime(loginOptions)
      setShowSuccessMessage(true)
    } catch (err) {
      throw new Error(String(error))
    }
  }

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <>
      <RegisterButton title="Registrar" onClick={handleOpenNewRegisterDrawer} />

      <NewRegisterDrawer
        open={openNewRegisterDrawer}
        onSave={handleNewRegister}
        onDateChange={handleNewDate}
        onCancel={handleOpenNewRegisterDrawer}
        isLoading={loading}
      />

      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={2000}
        onClose={() => setShowSuccessMessage(false)}
      >
        <MuiAlert onClose={() => setShowSuccessMessage(false)} severity="success">
          Novo Registro efetuado com sucesso!
        </MuiAlert>
      </Snackbar>
    </>
  )
}

export default NewRegister
