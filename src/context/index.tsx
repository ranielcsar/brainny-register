import React, { useState, createContext, useContext } from 'react'
import { ContextUserProps, UserProps } from './types'

export const ContextUser = createContext({} as ContextUserProps)

const UserContext: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null)

  return <ContextUser.Provider value={{ user, setUser }}>{children}</ContextUser.Provider>
}

function useAuth() {
  const context = useContext(ContextUser)

  if (!context) throw new Error('Auth provider não foi localizado.')

  return context
}

export { UserContext, useAuth }
