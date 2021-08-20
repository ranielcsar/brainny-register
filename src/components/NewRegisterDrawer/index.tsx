import React, { useContext } from 'react'
import { Drawer } from '@material-ui/core'
import { ContextUser } from 'context'

import {
  Content,
  Header,
  MiddleContainer,
  UserInfos,
  Role,
  Name,
  Footer,
  SaveButton,
  CancelButton,
} from './styles'

const NewRegisterDrawer: React.FC = () => {
  const { user } = useContext(ContextUser)

  return (
    <Drawer open={true} anchor={'right'}>
      <Content>
        <Header>Novo Registro</Header>

        <MiddleContainer>
          <UserInfos>
            <Role>{user.role}</Role>
            <Name>{user.username}</Name>
          </UserInfos>
        </MiddleContainer>

        <Footer>
          <SaveButton title="Salvar" />
          <CancelButton secondary title="Cancelar" />
        </Footer>
      </Content>
    </Drawer>
  )
}

export default NewRegisterDrawer
