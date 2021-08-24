import React, { useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import Error from 'components/Error'

import { Container, StyledInput, Title } from './styles'

export type Props = Partial<HTMLInputElement> & {
  name: string
  title: string
}

export type InputProps = JSX.IntrinsicElements['input'] & Props

const TextInput: React.FC<InputProps> = ({ name, title, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <>
      <Container>
        <Error message={error} />
        <StyledInput
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...props}
        />
        <Title>{title}</Title>
      </Container>
    </>
  )
}

export default TextInput
