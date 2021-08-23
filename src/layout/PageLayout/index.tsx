import React from 'react'

import { Container, Content, StyledSidebar } from './styles'

const PageContainer: React.FC = ({ children }) => (
  <Container>
    <StyledSidebar />
    <Content>{children}</Content>
  </Container>
)

export default PageContainer
