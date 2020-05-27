import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AdminLayout from "layouts/Admin.jsx";
import Signin from "./users/Signin";
import Counter from './users/Counter'

export default function App() {
    return (
        <main>
        <Switch>
            {/* <Route path="/" component={} exact/>
            <Route path="" component={} />
            <Route path="" component={} />
            <Route path="" component={} />
            <Route path="" component={} />
            <Route path="" component={} />
            <Route path="" component={} />
            <Route path="" component={} />
            <Route path="" component={} /> */}

            <Switch> 
       <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" /> 
      {/* <Route path="/login" render={props => <AdminLayout {...props} />} />
       <Redirect from="/" to="/login/home" /> 
       <Login></Login> */}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <PublicRoute path="/admin/dashboard" component={Dashboard} /> */}
      {/* <PrivateRoute path="/admin/dashboard" component={Dashboard} /> */}
      {/* <Counter></Counter> */}
       {/* <Signin></Signin> */}
       
    </Switch>
        </Switch>
    </main>
    )
}
