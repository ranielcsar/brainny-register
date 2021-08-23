import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from 'pages/Login'
import PageLayout from 'layout/PageLayout'
import { useAuth } from 'context'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import MyRegisters from 'pages/MyRegisters'

function Routes() {
  const { user } = useAuth()

  useEffect(() => {}, [user])

  return (
    <Switch>
      <Route exact path="/" component={MyRegisters} />

      {user && (
        <PageLayout>
          {user.role === 'admin' ? <AdminRoutes /> : <UserRoutes />}
        </PageLayout>
      )}
    </Switch>
  )
}

export default Routes
