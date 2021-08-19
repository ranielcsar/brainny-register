import React from 'react'
import { Drawer } from '@material-ui/core'

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
  return (
    <Drawer open={false} anchor={'right'}>
      <Content>
        <Header>Novo Registro</Header>

        <MiddleContainer>
          <UserInfos>
            <Role>Colaborador</Role>
            <Name>João Silva</Name>
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
