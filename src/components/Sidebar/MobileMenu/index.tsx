import React, { CSSProperties } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Drawer } from '@material-ui/core'

import { DrawerContent } from './styles'

const closeIconStyle: CSSProperties = {
  fontSize: 30,
  position: 'absolute',
  right: 15,
  top: 15,
}

type Props = {
  open: boolean
  onClick: () => void
  onClose: () => void
}

const MobileMenu: React.FC<Props> = ({ open, onClick, onClose, children }) => (
  <>
    <MenuIcon style={{ fontSize: 30 }} onClick={onClick} />
    <Drawer anchor={'left'} open={open}>
      <DrawerContent>
        <CloseIcon style={closeIconStyle} onClick={onClose} />
        {children}
      </DrawerContent>
    </Drawer>
  </>
)

export default MobileMenu
