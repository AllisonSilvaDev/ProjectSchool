import React, { useState } from 'react'
import './styles.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const logar = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/token/`,
        {
          username: user,
          password: password,
        }
      )
      console.log("Token Login", response.data.access)
      localStorage.setItem('token', response.data.access)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className='container'>

      <h1>Login</h1>
      <input type="text" placeholder='User' className='caixa' value={user} onChange={(e) => { setUser(e.target.value) }} />
      <input type='password' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='caixa' />
      <button onClick={logar} >Enviar</button>

    </div>
  )
}
