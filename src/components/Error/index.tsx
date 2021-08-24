import React from 'react'

import { Container } from './styles'

type Props = {
  message: string | undefined
}

const Error: React.FC<Props> = ({ message }) => {
  return <Container>{message}</Container>
}

export default Error
