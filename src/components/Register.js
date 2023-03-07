import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/users/register`


const Register =  () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [apiResponse, setApiResponse] = useState("")

  const handleSubmit =  async (event) => {
    event.preventDefault()

    const response = await fetch (APIURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
    const data = await response.json()
    setApiResponse(data.success)
    

    setUsername("")
    setPassword("")
  }


  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input
        type="text" 
        value = {username}
        onChange= {(event)=>{
          setUsername(event.target.value)
        }}
        >
        </input>
        <label>Password:</label>
        <input
        type="password"
        value= {password}
        onChange= {(event)=>{
          setPassword(event.target.value)
        }}
        >
        </input>
        <button type="submit">Submit</button>
      </form>
      {apiResponse === false ? (
        <>
        <h4>user already exists</h4> ,
        <button><Link to ="/">Use Existing Login</Link></button>
        </>
      
      ): apiResponse === true ? (
        <>
          <h4>registration successful!</h4> 
          <button><Link to ="/">Back to Home Page</Link></button>
        </>
      ):("")
      }
    </div>

  )
}


export default Register