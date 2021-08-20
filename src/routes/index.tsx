import { Switch, Route } from 'react-router-dom'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import MyRegisters from 'pages/MyRegisters'
import PrivateRoute from './PrivateRoute'
import PageLayout from 'layout/PageLayout'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />

      <PageLayout>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/my-registers" component={MyRegisters} />
      </PageLayout>
    </Switch>
  )
}

export default Routes
