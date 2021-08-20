import React, { FunctionComponent } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { isAuthenticated } from 'services/auth'

type Props = RouteProps & {
  component: FunctionComponent<any>
}

const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
)

export default PrivateRoute
