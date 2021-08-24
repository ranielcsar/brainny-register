import React from 'react'
import { CircularProgress } from '@material-ui/core'

const Loading: React.FC = ({ ...rest }) => <CircularProgress color="inherit" {...rest} />

export default Loading
