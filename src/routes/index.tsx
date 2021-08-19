import { Switch, Route } from 'react-router-dom'
import Dashboard from 'pages/Dashboard'
import MyRegisters from 'pages/MyRegisters'
import PageLayout from 'layout/PageLayout'

function Routes() {
  return (
    <PageLayout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/my-registers" component={MyRegisters} />
      </Switch>
    </PageLayout>
  )
}

export default Routes
