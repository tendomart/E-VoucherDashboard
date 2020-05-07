import React, { Component,useState } from 'react'
// import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from  '../utils/Common';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// export class Login extends Component {
    function Login(props) {
    
        const username = useFormInput('');
        const password = useFormInput('');
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);
       
        // handle button click of login form
        // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/admin/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
        //return (
    //render() {
        return (
            <div className="card col-12 col-sm-4 login-card mt-2 " class="d-flex justify-content-center" >
                <form >
                        
                <div className="form-group text-left"> <label htmlFor="userName" {...username} autoComplete="new-password">User Name</label>
                <input type="text" 
                       className="form-control" 
                       id="phone" 
                       aria-describedby="userName" 
                       placeholder="Enter Username"
                />
                </div>
                
                <div className="form-group text-left">
                <label htmlFor="password" {...password} autoComplete="new-password">Password</label>
                <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading}
                >
                    Login / Signin
                </button>
                </form>
            </div>
        )
    }

    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);
      
        const handleChange = e => {
          setValue(e.target.value);
        }
        return {
          value,
          onChange: handleChange
        }
    }


export default Login
