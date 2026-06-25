import React, {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'
function Login() {
    const [username, setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setuser}=useContext(UserContext)
    const Submit=(e)=>{
        e.preventDefault()
        setuser({username,password})

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Username' />
        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />
        <button onClick={Submit}>Submit</button>
    </div>
  )
}

export default Login