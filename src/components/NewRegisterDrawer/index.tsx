import React, { BaseSyntheticEvent, useContext } from 'react'
import { Drawer } from '@material-ui/core'
import { ContextUser } from 'context'
import Loading from '../Loading'

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
  onSave: () => void
  onCancel: () => void
  onDateChange: (event: BaseSyntheticEvent) => void
  isLoading: boolean
}

const NewRegisterDrawer: React.FC<Props> = ({
  open,
  onSave,
  onCancel,
  onDateChange,
  isLoading,
}) => {
  const { user } = useContext(ContextUser)

  return (
    <Drawer open={open} anchor={'right'}>
      <Content>
        <Header>Novo Registro</Header>

        <MiddleContainer>
          <UserInfos>
            <Role>{user?.role}</Role>
            <Name>{user?.username}</Name>
          </UserInfos>

          <DateInput
            id="datetime-local"
            label="Selecione uma data"
            type="datetime-local"
            onChange={onDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </MiddleContainer>

        <Footer>
          {isLoading ? <Loading /> : <SaveButton title="Salvar" onClick={onSave} />}
          <CancelButton secondary title="Cancelar" onClick={onCancel} />
        </Footer>
      </Content>
    </Drawer>
  )
}

export default NewRegisterDrawer
