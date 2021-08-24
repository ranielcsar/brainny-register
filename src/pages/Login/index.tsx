import React, { useContext, useRef, RefObject, useEffect, FormEvent } from 'react'
import TextInput from 'components/Inputs/TextInput'
import Button from 'components/Button'
import { CircularProgress } from '@material-ui/core'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from 'services/querys'
import { ContextUser } from 'context'
import { hasSavedUser, saveToken, saveUser } from 'services/auth'
import { useHistory } from 'react-router-dom'
import { FormHandles, SubmitHandler } from '@unform/core'
import * as Yup from 'yup'

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
import showYupErrors from 'utils/showYupError'

type LoginFormData = {
  identifier: string
  password: string
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { setUser } = useContext(ContextUser)
  const history = useHistory()

  const [login, { loading, data, error }] = useMutation(LOGIN_USER)

  const handleLoginSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const { identifier, password } = data

      const loginSchema = Yup.object().shape({
        identifier: Yup.string()
          .email('Email inválido.')
          .required('Por favor digite um email.'),

        password: Yup.string()
          .required('Ops! Faltou a senha...')
          .min(8, 'A senha precisa de no mínimo 8 dígitos.'),
      })

      await loginSchema.validate(data, {
        abortEarly: false,
      })

      const loginOptions = {
        variables: { identifier, password },
      }

      await login(loginOptions)
    } catch (err) {
      showYupErrors(formRef, err)
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
      saveUser(newUser)
      setUser(newUser)

      if (newUser.role === 'admin') {
        history.push('/dashboard')
      } else {
        history.push('/my-registers')
      }
    }
  }, [data])

  useEffect(() => {
    if (hasSavedUser()) {
      const user = hasSavedUser()
      setUser(user)

      if (user.role === 'admin') {
        history.push('/dashboard')
      } else {
        history.push('/my-registers')
      }
    }
  }, [])

  return (
    <Container>
      <ApresentationContainer>
        <BrainnyRegisterLogo />
        <Title>Register</Title>
        <Subtitle>Access Control</Subtitle>
      </ApresentationContainer>

      <LoginFormContainer>
        <LoginVector />

        <LoginForm ref={formRef} onSubmit={handleLoginSubmit}>
          <TextInput name="identifier" title="Login" />
          <TextInput name="password" title="Senha" type="password" />

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
