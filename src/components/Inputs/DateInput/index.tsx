import React from 'react'

import { Container, StyledInput, Title } from './styles'

export type InputProps = Partial<HTMLInputElement> & {
  title: string
}

const DateInput: React.FC<InputProps> = ({ title, ...props }) => (
  <Container>
    <StyledInput />
    <Title>{title}</Title>
  </Container>
)

export default DateInput
