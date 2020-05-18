import React , { useState } from 'react'
import  authProvider from '././authProvider'
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';

function Signin() {
    
//capture values using state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory(); 
//Handle Submit

function redirect() {
  history.push("/admin/dashboard");
  }
    function handleSubmit(event) {
      
        event.preventDefault();
        console.log(username);
        console.log(password);
        }

        const handleLogin = (e) => {
            e.preventDefault();
            // setError(null);    
            // setLoading(true);
        //////FETCH //////////

        // login: ({ username, password }) =>  {
        //     const request = new Request('http://localhost:8090/api/auth/signin', {
        //         method: 'POST',
        //         body: JSON.stringify({ username, password }),
        //         headers: new Headers({ 'Content-Type': 'application/json' }),
        //     });
        //     return fetch(request)
        //         .then(response => {
        //             if (response.status < 200 || response.status >= 300) {
        //                 throw new Error(response.statusText);
        //             }
        //             return response.json();
        //         })
        //         .then(({ token }) => {
        //             localStorage.setItem('token', token);
        //         });
        // }

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
    //   this.setUser();
    //   this.onSubmit();
      console.log(`Hey am Status ${res.status }`);
      // console.log(`Hey am User ${ this.onSubmit() }`);
    //   history.push('/admin/dashboard');
      redirect() ;
    //   return window.location = '/admin/dashboard';
//    <Redirect from="/" to="/admin/dashboard" /> 

          }
          else if(res.status < 200 || res.status >= 300) {
            // throw new Error(res.statusText);
          }
   
  })
  .then()
  .catch(err => console.log("api Erorr: ", err));

        /////FETCH////////////

}
    return (
        <form onSubmit={handleSubmit} authprovider={authProvider}>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Username</label>
            <input type="username" 
            className="form-control"
            value={username}
            onChange={e => setUsername(e.target.value)}
             placeholder="Enter Username" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" 
            className="form-control" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password" />
        </div>

        

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={handleLogin}>Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </form>
    )
}

export default Signin
