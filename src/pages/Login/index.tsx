import React from 'react'
import TextInput from 'components/Inputs/TextInput'
import Button from 'components/Button'

import {
  Container,
  ApresentationContainer,
  Title,
  Subtitle,
  LoginFormContainer,
  BrainnyRegisterLogo,
  LoginVector,
  LoginForm,
} from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <ApresentationContainer>
        <BrainnyRegisterLogo />
        <Title>Register</Title>
        <Subtitle>Access Control</Subtitle>
      </ApresentationContainer>

      <LoginFormContainer>
        <LoginVector />

        <LoginForm>
          <TextInput title="Login" />
          <TextInput title="Senha" />
          <Button title="Login" />
        </LoginForm>
      </LoginFormContainer>
    </Container>
  )
}

export default Login
