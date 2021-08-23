import React, { BaseSyntheticEvent, FormEvent, useContext, useState } from 'react'
import { Drawer } from '@material-ui/core'
import { ContextUser } from 'context'

import {
  Content,
  Header,
  MiddleContainer,
  UserInfos,
  DateInput,
  Role,
  Name,
  Footer,
  SaveButton,
  CancelButton,
} from './styles'

type Props = {
  open: boolean
  handleOpen: () => void
}

const NewRegisterDrawer: React.FC<Props> = ({ open, handleOpen }) => {
  // const { user } = useContext(ContextUser)
  const [newDate, setNewDate] = useState(new Date())
  const user = {
    role: 'Admin',
    username: 'Administrador',
  }

  const createNewRegister = async () => {
    console.log(newDate)
    handleOpen()
  }

  const handleNewDate = (event: BaseSyntheticEvent) => {
    const newDate = new Date(event.target.value)

    setNewDate(newDate)
  }

  return (
    <Drawer open={open} anchor={'right'}>
      <Content>
        <Header>Novo Registro</Header>

        <MiddleContainer>
          <UserInfos>
            <Role>{user.role}</Role>
            <Name>{user.username}</Name>
          </UserInfos>

          <DateInput
            id="datetime-local"
            label="Selecione uma data"
            type="datetime-local"
            defaultValue={newDate}
            onChange={handleNewDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </MiddleContainer>

        <Footer>
          <SaveButton title="Salvar" onClick={createNewRegister} />
          <CancelButton secondary title="Cancelar" onClick={handleOpen} />
        </Footer>
      </Content>
    </Drawer>
  )
}

export default NewRegisterDrawer
