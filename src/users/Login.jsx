import React, { Component,useState } from 'react'
// import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from  '../utils/Common';
 import useFormInput from './/useFormInput';
//  import { useHistory } from "react-router-dom";
    function Login(props) {
      // let history = useHistory();
       const username = useFormInput('');
        const password = useFormInput('');
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);
  const [username1, setUsername] = useState("");
  const [password1, setPassword] = useState("");
       
        // handle button click of login form
        // handle button click of login form
  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);    
    setLoading(true);
     //////FETCH/////////////////////


fetch("http://localhost:8090/api/auth/signin", {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: username,
    password: password
  }) 
})
  .then(res => {
    res.json();
    // this.redirectToTarget();
    // console.log(data);

    if (res.status === 200 ) {
      this.setUser();
      this.onSubmit();
      console.log(`Hey am Status ${res.status }`);
      // console.log(`Hey am User ${ this.onSubmit() }`);
          }
   
  })
  .then()
  .catch(err => console.log("api Erorr: ", err));


  /////////TETCH///////////////////////
     
  }
        //return (
    //render() {
        return (
          // <div className="card col-12 col-sm-4 login-card mt-2 " className="d-flex justify-content-center" >
            <div className="card col-12 col-sm-4 login-card mt-2 " >
               <div className="card col-m-8">
                 <label htmlFor="Title">Mcash E-Voucher Login</label>
               </div>
                <form >
                        
                <div className="form-group text-left"> <label htmlFor="userName" {...username} autoComplete="new-username">User Name</label>
                <input type="text" 
                       className="form-control" 
                       id="username" 
                       onChange={e => setUsername(e.target.value)}
                      //  aria-describedby="userName" 
                       placeholder="Enter Username"
                       name="username"
                />
                </div>
                
                <div className="form-group text-center ">
                <label htmlFor="password" {...password} autoComplete="new-password">Password</label>
                <input type="password" 
                        className="form-control" 
                        id="password" 
                        // onChange={e => setPassword(e.target.value)}
                        onChange={useFormInput.handleChange}
                        placeholder="Password"
                        name="password"
                    />
                </div>
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                <button 
                    type="submit" 
                    className="btn btn-primary"
                     onClick={handleLogin} 
                    
                >
                    Login / Signin
                </button>
  
                </form>
            </div>
        )
    }

    

export default Login
