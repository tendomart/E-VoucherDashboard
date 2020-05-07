import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
function PublicRoute({ component: Component, ...rest }) {
    return (
        <div>
             <Route
      {...rest}
      render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/admin/dashboard' }} />}
    />
        </div>
    )
}

export default PublicRoute
