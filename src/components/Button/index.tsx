import React from 'react'

import { Container, Title } from './styles'

export type ButtonProps = Partial<HTMLButtonElement> & {
  title: string
  secondary?: boolean
}

const Button: React.FC<ButtonProps> = ({ title, secondary, ...props }) => (
  <Container {...props} secondary={secondary}>
    <Title>{title}</Title>
  </Container>
)

export default Button
