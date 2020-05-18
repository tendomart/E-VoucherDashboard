import React, {useState}from 'react'
import axios from 'axios';

import { useHistory ,Redirect,BrowserRouter, Route} from "react-router-dom";

// import { BrowserRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
// function Counter() {
  
   class Counter extends React.Component {

    constructor(props){
      super(props);
      this.state={
      username:'',
      password:'',
      userFound:false
           }
     }
    
     setUser(){
       this.state.userFound=true;
     }

     onSubmit= ()=>{
      if(this.state.userFound){
          return  <Redirect  to="/admin/dashboard" />    
         }
   }

    // state = {
    //   username: '',
    //   password:''
    // }

//event handling
  // handleChange = event => {
    
  //   this.setState({ username: event.target.value });
  //   this.setState({password:event.target.value});
  //   // alert('fetched '+JSON.stringify(this.state));
  // }
 //submit

 handleSubmit = (event) =>{
   //prevent default component behaviour
   event.preventDefault();

let data = {
  username: this.state.username,
  password: this.state.password
}

  const user ={
    username:"",
    password:""
  };

  //INTERCEPT REQUEST
  // axios.interceptors.request.use(config => {
  //   // log a message before any HTTP request is sent
  //   console.log('Request was sent');
  //   alert('fetched '+JSON.stringify(data));
  //   return config;
  // });

   //post using axios
  //  axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  // axios.post(`http://localhost:8090/api/auth/signin`, { user }, {headers:{'Access-Control-Allow-Origin': '*'}})
//   axios.post(`http://localhost:8090/api/auth/signin`, { data }, {headers: { 'Content-Type': 'application/json;charset=UTF-8',
//   'Access-Control-Allow-Origin': '*','Accept': 'application/json'
// }})
 
//  .then(res => {
//      console.log(res);
//      console.log(res.data);
//    })
//    .catch((error) => {
//     console.log(error.response);
//     // console.log(data);
//     // alert(data);
//     });

    //////FETCH/////////////////////


fetch("http://localhost:8090/api/auth/signin", {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: this.state.username,
    password: this.state.password
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
     

// .catch((error) => console.log( error.response.request._response ) );
 }
  
    render() {
      return (
    <div className="card col-12 col-sm-4 login-card mt-2 " >
               <div className="card col-m-8">
                 <label htmlFor="Title">Mcash E-Voucher Login</label>
               </div>
                <form onSubmit={this.handleSubmit}>
                        
                <div className="form-group text-left"> <label htmlFor="userName"  autoComplete="new-username">User Name</label>
                <input type="text" 
                       className="form-control" 
                      //  id="username" 
                       name="username"
                       required="required"

                      //  onChange={e => setUsername(e.target.value)}
                      //  aria-describedby="userName" 
                       placeholder="Enter Username"
                       value={this.state.username} onChange={(event) => this.setState({username: event.target.value})}
                  
                />
                </div>
                
                <div className="form-group text-center ">
                <label htmlFor="password"  autoComplete="new-password">Password</label>
                <input type="password" 
                        className="form-control" 
                        // id="password" 
                        name="password"
                        required="required"
                        // onChange={e => setPassword(e.target.value)}
                        // onChange={useFormInput.handleChange}
                        placeholder="Password"
                        value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}
                    />
                </div>
                {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
                <button 
                    type="submit" 
                    className="btn btn-primary"
                     onClick={this.onSubmit} 
                    
                >
                    Login / Signin
                </button>
  
                </form>
            </div>
)}
}

export default Counter ;