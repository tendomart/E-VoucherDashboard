/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink , Redirect} from 'react-router-dom';
import axios from 'axios';
import ReactDOM from 'react-dom'
//import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import Login from "./users/Login";
import AdminLayout from "layouts/Admin.jsx";
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
// import App from "./App";
import Icons from "views/Upgrade";
import Dashboard from "views/Dashboard";
import { getToken } from 'utils/Common';
import { setUserSession } from 'utils/Common';
import { removeUserSession } from 'utils/Common';




// export function index() {
//   const [authLoading, setAuthLoading] = useState(true);
 
//   useEffect(() => {
//     const token = getToken();
//     if (!token) {
//       return;
//     }
 
//     axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
//       setUserSession(response.data.token, response.data.user);
//       setAuthLoading(false);
//     }).catch(error => {
//       removeUserSession();
//       setAuthLoading(false);
//     });
//   }, []);
 
//   if (authLoading && getToken()) {
//     return <div className="content">Checking Authentication...</div>
//   }
//   return (
//     <div>
      
//     </div>
//   )
// }

 

ReactDOM.render(
  // const [authLoading, setAuthLoading] = useState(true);
  

 
  
  <div>
  <BrowserRouter>
  
    <Switch> 
       {/* <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />  */}
      {/* <Route path="/login" render={props => <AdminLayout {...props} />} />
       <Redirect from="/" to="/login/home" /> 
       <Login></Login> */}
      {/* <Route exact path="/" component={Home} /> */}
      <PublicRoute path="/login" component={Login} />
      {/* <PrivateRoute path="/admin/dashboard" component={Dashboard} /> */}
       
    </Switch>
    {/* <Login></Login> */}
  </BrowserRouter>
  </div>,
  document.getElementById("root")
);

