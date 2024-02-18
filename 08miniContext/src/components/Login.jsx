import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e)=>{
        e.preventDefault()
        setUser({username , password})
    }
return (
    <div>
    <h1>Login Page</h1>
    <br />
    <input 
    type="text"
    value={username}
    onChange={(e)=>{
        setUsername(e.target.value)
    }}
    name="username" 
    placeholder='username' />
    <input type="password" 
    value={password}
    onChange={(e)=>{
        setPassword(e.target.value)
    }}
    placeholder='password' />
    <input type="submit" name="submit" onClick={HandleSubmit} />

    </div>
)
}
