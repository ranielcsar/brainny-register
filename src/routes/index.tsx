import { ComponentType, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from 'pages/Login'
import PageLayout from 'layout/PageLayout'
import { useAuth } from 'context'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import PrivateRoute from './PrivateRoute'

const NotFound = () => (
  <h1 style={{ textAlign: 'center', fontSize: 100 }}>
    Ops! Acho que você errou o caminho...
  </h1>
)

function Routes() {
  const { user } = useAuth()

  useEffect(() => {}, [user])

  return (
    <Switch>
      <Route exact path="/" component={Login} />

      {user && (
        <PageLayout>
          {user.role === 'admin' ? <AdminRoutes /> : <UserRoutes />}
        </PageLayout>
      )}

      <PrivateRoute exact path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
