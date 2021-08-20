import React, { useContext, useRef, RefObject, useEffect, FormEvent } from 'react'
import TextInput from 'components/Inputs/TextInput'
import Button from 'components/Button'
import { CircularProgress } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from 'services/querys'
import { ContextUser } from 'context'
import { saveToken } from 'services/auth'
import { useHistory } from 'react-router-dom'

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

type RefType = RefObject<HTMLInputElement> & {
  value: string
}

const Login: React.FC = () => {
  const loginRef = useRef<RefType>(null)
  const passwordRef = useRef<RefType>(null)
  const { setUser } = useContext(ContextUser)
  const history = useHistory()

  const [login, { loading, data, error }] = useMutation(LOGIN_USER)

  const handleLoginSubmit = (event: FormEvent) => {
    event.preventDefault()

    try {
      const identifier = loginRef.current?.value || ''
      const password = passwordRef.current?.value || ''

      const loginOptions = {
        variables: { identifier, password },
      }

      login(loginOptions)
    } catch (err) {
      throw new Error(String(error))
    }
  }

  useEffect(() => {
    if (data) {
      saveToken(data.login.jwt)
      const { login } = data

      const newUser = {
        id: login.user.id,
        username: login.user.username,
        role: login.user.role.name,
      }
      setUser(newUser)
    }
  }, [data])

  useEffect(() => {
    if (data) {
      history.push('/dashboard')
    }
  }, [data])

  return (
    <Container>
      <ApresentationContainer>
        <BrainnyRegisterLogo />
        <Title>Register</Title>
        <Subtitle>Access Control</Subtitle>
      </ApresentationContainer>

      <LoginFormContainer>
        <LoginVector />

        <LoginForm onSubmit={handleLoginSubmit}>
          <TextInput title="Login" ref={loginRef as RefType} />
          <TextInput title="Senha" type="password" ref={passwordRef as RefType} />
          {loading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Button type="submit" title="Login" />
          )}
        </LoginForm>
      </LoginFormContainer>
    </Container>
  )
}

export default Login
