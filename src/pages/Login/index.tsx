import React, { useRef, RefObject } from 'react'
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

type RefType = RefObject<HTMLInputElement>

const Login: React.FC = () => {
  const loginRef = useRef<unknown>(null)
  const passwordRef = useRef<unknown>(null)

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
          <TextInput title="Login" ref={loginRef as RefType} />
          <TextInput title="Senha" type="password" ref={passwordRef as RefType} />
          <Button title="Login" />
        </LoginForm>
      </LoginFormContainer>
    </Container>
  )
}

export default Login
