import { UserProps } from 'context/types'

export const TOKEN_KEY = '@brainny-token'
export const USER = '@brainny-user'

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const saveUser = (user: UserProps) => {
  localStorage.setItem(USER, JSON.stringify(user))
}

export const hasSavedUser = () => {
  const user = localStorage.getItem(USER)

  return user ? JSON.parse(user) : null
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
}
