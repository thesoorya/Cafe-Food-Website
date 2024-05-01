import React from 'react'
import RegisterComp from '../../components/RegisterComp/RegisterComp'
import Navbar from '../../components/Navbar/Navbar'

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-5'>
        <RegisterComp />
      </div>
    </div>
  )
}

export default RegisterPage