import { Dispatch } from 'react'

export type UserProps = {
  id: string
  username: string
  role: string
}

export type ContextUserProps = {
  user: UserProps | null
  setUser: Dispatch<UserProps>
}
