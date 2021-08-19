import React from 'react'

import { Container, PersonalInfos, Name, Id, Date, Hour } from './styles'

export type ColaboratorProps = {
  colaborator: {
    name: string
    id: string
  }
  date: string
  hour: string
}

const Colaborator: React.FC<ColaboratorProps> = ({ colaborator, date, hour }) => (
  <Container>
    <PersonalInfos>
      <Name>{colaborator.name}</Name>
      <Id>{colaborator.id}</Id>
    </PersonalInfos>

    <Date>{date}</Date>

    <Hour>{hour}h</Hour>
  </Container>
)

export default Colaborator
