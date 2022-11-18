import React from 'react'
import LoginTransaction from '../components/LoginTransaction'
import NavBar from '../components/NavBar'

function Transaction() {


  return (
    <div className='transaction'>
      <NavBar />
      <LoginTransaction />
    </div>
  )
}

export default Transaction