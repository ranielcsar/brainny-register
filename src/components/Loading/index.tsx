import React from 'react'
import { CircularProgress } from '@material-ui/core'

const loadingStyle = {
  margin: '2rem 0.5rem',
}

const Loading: React.FC = () => <CircularProgress color="inherit" style={loadingStyle} />

export default Loading
