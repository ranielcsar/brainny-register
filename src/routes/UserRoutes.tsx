import MyRegisters from 'pages/MyRegisters'
import PrivateRoute from './PrivateRoute'

function Routes() {
  return <PrivateRoute exact path="/" component={MyRegisters} />
}

export default Routes
