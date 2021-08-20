import React, { useState, createContext } from 'react'
import { UserProps } from './types'

export const ContextUser = createContext({} as any)

const UserContext: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps>()

  return <ContextUser.Provider value={{ user, setUser }}>{children}</ContextUser.Provider>
}

export default UserContext
