import React from 'react'

import { Container, PersonalInfos, Name, Id, Date, Hour } from './styles'

export type RegisterProps = {
  user: {
    name: string
    id: string
  }
  date: Date | null
  hour: Date | null
}

const Register: React.FC<RegisterProps> = ({ user, date, hour, ...rest }) => (
  <Container {...rest}>
    <PersonalInfos>
      <Name>{user.name}</Name>
      <Id>{user.id}</Id>
    </PersonalInfos>

    {date ? <Date value={date} format="DD/MM/YY" /> : '...'}

    <Hour>{hour ? `${hour.getHours()}:00h` : '-'}</Hour>
  </Container>
)

export default Register
