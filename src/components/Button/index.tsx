import React from 'react'

import { Container, Title } from './styles'

export type ButtonProps = Partial<HTMLButtonElement> & {
  title: string
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => (
  <Container {...props}>
    <Title>{title}</Title>
  </Container>
)

export default Button
