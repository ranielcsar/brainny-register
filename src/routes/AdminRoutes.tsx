import Dashboard from 'pages/Dashboard'
import MyRegisters from 'pages/MyRegisters'
import PrivateRoute from './PrivateRoute'

function AdminRoutes() {
  return (
    <>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/my-registers" component={MyRegisters} />
    </>
  )
}

export default AdminRoutes
