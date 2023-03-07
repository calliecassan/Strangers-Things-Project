import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import NewPost from './NewPost';

const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/users/login`

const LoginForm = ({isLoggedIn, setIsLoggedIn}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault()
   fetch(APIURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    .then(response => response.json())
      .then(result => {
        window.localStorage.setItem("token", result.data.token)
        setIsLoggedIn(true)
      })
      .catch( (err) => {
        console.log(err)
      } );  
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem("token");
    setIsLoggedIn(false)
  }

    if (!isLoggedIn) {
    return (
      <div id='container'>
        <div id='navbar'></div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={username} onChange={(event) => setUsername(event.target.value)} />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' value ={password} onChange={(event) => setPassword(event.target.value)} />
          <button type='submit'>Submit</button>
        </form>
        <button><Link to='/register'>Register</Link></button>
      </div>
    )
  }else {
    return (
      <div>
      <button onClick={handleLogout}>Log Out</button>
      <button><Link to ='/Profile'>Profile</Link></button>
      </div>
    )
  }
  }

  export default LoginForm