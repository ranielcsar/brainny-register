import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

type Props = {
  open: boolean
  message: string
  type: any
  onClose: () => void
}

const NewRegisterAlert: React.FC<Props> = ({ open, message, type, onClose }) => (
  <Snackbar open={open} autoHideDuration={2000} onClose={onClose}>
    <MuiAlert onClose={onClose} severity={type}>
      {message}
    </MuiAlert>
  </Snackbar>
)

export default NewRegisterAlert
