import React from 'react'
import { useEffect, useState } from 'react'
import SidebarItem from './SidebarItem'
import MobileMenu from './MobileMenu'
import { ReactComponent as DashboardIcon } from 'assets/icons/dashboard.svg'
import { ReactComponent as RegistersIcon } from 'assets/icons/register.svg'

import { Container, Logo, Divider } from './styles'

const Sidebar: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.querySelector('#root')
    const width = root?.clientWidth || 0

    setScreenWidth(width)
  }, [])

  return (
    <Container>
      {screenWidth < 1024 ? (
        <>
          <MobileMenu
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            onClose={() => setMenuOpen(false)}
          />

          <Logo />
          <Divider />
        </>
      ) : (
        <>
          <Logo />
          <Divider />

          <SidebarItem path="/" label="Dashboard" icon={DashboardIcon} />
          <SidebarItem path="my-registers" label="Meus Registros" icon={RegistersIcon} />
        </>
      )}
    </Container>
  )
}

export default Sidebar
