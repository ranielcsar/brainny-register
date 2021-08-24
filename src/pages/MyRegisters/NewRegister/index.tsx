import React, { BaseSyntheticEvent, useState } from 'react'
import NewRegisterDrawer from 'components/NewRegisterDrawer'
import { useMutation } from '@apollo/client'
import { CREATE_REGISTERED_TIME } from 'services/querys'
import { RegisterButton } from './styles'
import { useAuth } from 'context'
import NewRegisterAlert from '../NewRegisterAlert'

const NewRegister: React.FC = () => {
  const [newDate, setNewDate] = useState<Date | null>()
  const [openNewRegisterDrawer, setOpenNewRegisterDrawer] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const { user } = useAuth()

  const handleOpenNewRegisterDrawer = () => {
    setOpenNewRegisterDrawer(!openNewRegisterDrawer)
  }

  const [createRegisteredTime, { loading }] = useMutation(CREATE_REGISTERED_TIME)

  const handleNewDate = (event: BaseSyntheticEvent) => {
    const newDate = new Date(event.target.value)

    setNewDate(newDate)
  }

  const handleNewRegister = async () => {
    try {
      if (!newDate) {
        setShowErrorMessage(true)
        return
      }

      const loginOptions = {
        variables: {
          dateTime: {
            timeRegistered: newDate,
            user: user?.id,
          },
        },
      }

      await createRegisteredTime(loginOptions)
      handleOpenNewRegisterDrawer()
      setShowSuccessMessage(true)
      setNewDate(null)
    } catch (err) {
      setShowErrorMessage(true)
      return
    }
  }

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

      <NewRegisterAlert
        open={showSuccessMessage}
        onClose={() => setShowSuccessMessage(false)}
        message={'Novo Registro efetuado com sucesso!'}
        type="success"
      />

      <NewRegisterAlert
        open={showErrorMessage}
        onClose={() => setShowErrorMessage(false)}
        message={'Por favor, escolha uma data.'}
        type="error"
      />
    </>
  )
}

export default NewRegister
