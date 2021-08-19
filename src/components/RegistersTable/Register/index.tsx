import React from 'react'

import { Container, PersonalInfos, Name, Id, Date, Hour } from './styles'

export type RegisterProps = {
  colaborator: {
    name: string
    id: string
  }
  date: string
  hour: string
}

const Register: React.FC<RegisterProps> = ({ colaborator, date, hour }) => (
  <Container>
    <PersonalInfos>
      <Name>{colaborator.name}</Name>
      <Id>{colaborator.id}</Id>
    </PersonalInfos>

    <Date>{date}</Date>

    <Hour>{hour}h</Hour>
  </Container>
)

export default Register
