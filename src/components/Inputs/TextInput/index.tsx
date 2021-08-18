import React, { forwardRef } from 'react'

import { Container, StyledInput, Title } from './styles'

export type InputProps = Partial<HTMLInputElement> & {
  title: string
}

const TextInput: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { title, ...props },
  ref,
) => (
  <Container>
    <StyledInput {...props} {...{ ref }} required />
    <Title>{title}</Title>
  </Container>
)

export default forwardRef(TextInput)
