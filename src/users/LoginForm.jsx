import React, { useState } from "react";
// import "./styles.css";

function Form() {
    const username = useFormInput('');
    const password = useFormInput('');
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");  
  
  
  const handleLogin = () => {
    setError(null);    
    setLoading(true);
    // axios.post('http://localhost:8090/api/auth/signin', { username: username.value, password: password.value }).then(response => {
      axios.post('http://localhost:8090/api/auth/signin', {  username: username.value, password: password.value}).then(response => {
     
    
    
    setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/admin/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
  
  return (
    <form>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="User name"
        type="text"
        name="userName"
        required
      />
    
      
      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />      <button type="submit" >Submit</button>
    </form>
  );
}

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
}


export default Form;