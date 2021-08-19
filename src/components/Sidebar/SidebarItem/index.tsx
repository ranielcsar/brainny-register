import React, { FunctionComponent } from 'react'

import { Container, Label, Divider } from './styles'

type SidebarItemProps = {
  path: string
  label: string
  icon: FunctionComponent<any>
}

const SidebarItem: React.FC<SidebarItemProps> = ({ path, label, icon: Component }) => (
  <>
    <Container exact to={path} activeClassName="selected">
      <Component />
      <Label>{label}</Label>
    </Container>
    <Divider />
  </>
)

export default SidebarItem
