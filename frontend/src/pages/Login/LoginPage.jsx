import React from 'react'
import Login from '../../components/LoginComp/Login'
import Navbar from '../../components/Navbar/Navbar'

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-5'>
        <Login />
      </div>
    </div>
  )
}

export default LoginPage