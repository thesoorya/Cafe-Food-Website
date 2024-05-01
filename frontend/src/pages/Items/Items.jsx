import React from 'react'
import "./Items.css"
import AllItems from '../../components/AllItemsComponent/AllItems'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Items = () => {
  return (
    <>
      <Navbar />
      <div className='pt-5'>
        <AllItems />
      </div>
      <Footer />
    </>
  )
}

export default Items