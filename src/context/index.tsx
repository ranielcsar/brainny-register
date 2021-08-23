import React, { useState, createContext, useContext } from 'react'
import { useEffect } from 'react'
import { hasSavedUser } from 'services/auth'
import { ContextUserProps, UserProps } from './types'

export const ContextUser = createContext({} as ContextUserProps)

const UserContext: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null)

  useEffect(() => {
    if (hasSavedUser()) {
      const newUser = hasSavedUser()

      setUser(newUser)
    }
  }, [])

  return <ContextUser.Provider value={{ user, setUser }}>{children}</ContextUser.Provider>
}

function useAuth() {
  const context = useContext(ContextUser)

  if (!context) throw new Error('Auth provider não foi localizado.')

  return context
}

export { UserContext, useAuth }
