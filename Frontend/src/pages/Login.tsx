import React from 'react'
import LoginInput from '../components/LoginInput'
import '../styles/login.css'

function Login() {
  return (
    <div className='login'>
      <h1 className='initial-title'>{ `Bem vindo(a) ao NG Cash` }</h1>
      <LoginInput />
    </div>
  )
}

export default Login