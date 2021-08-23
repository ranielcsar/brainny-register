import MyRegisters from 'pages/MyRegisters'
import PrivateRoute from './PrivateRoute'

function Routes() {
  return <PrivateRoute exact path="/my-registers" component={MyRegisters} />
}

export default Routes
