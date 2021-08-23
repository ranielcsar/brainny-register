import React from 'react'
import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import createUserLinks from './createUserLinks'
import { useAuth } from 'context'

import { Container, Logo, Divider, LogoutButton } from './styles'
import { useHistory } from 'react-router-dom'
import { logout } from 'services/auth'

const Sidebar: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const { user } = useAuth()
  const history = useHistory()

  useEffect(() => {
    const root = document.querySelector('#root')
    const width = root?.clientWidth || 0

    setScreenWidth(width)
  }, [])

  const handleLogout = () => {
    history.push('/')
    logout()
  }

  return (
    <Container>
      {screenWidth < 1024 ? (
        <>
          <MobileMenu
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            onClose={() => setMenuOpen(false)}
          >
            {createUserLinks(user)}
          </MobileMenu>

          <Logo />
          <Divider />
        </>
      ) : (
        <>
          <Logo />
          <Divider />

          {createUserLinks(user)}
        </>
      )}

      <LogoutButton onClick={handleLogout} />
    </Container>
  )
}

export default Sidebar
