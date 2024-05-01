import React from 'react'
import "./Home.css"
import Header from '../../components/HomeComponents/Header/Header'
import Banner from '../../components/HomeComponents/Banner/Banner'
import Discount from '../../components/HomeComponents/Discount/Discount'
import CafeSection from '../../components/HomeComponents/CafeSection/CafeSEction'
import Footer from '../../components/Footer/Footer'
import Navbar from "../../components/Navbar/Navbar"
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Header />
        <div className='afterHome'>
          <Discount />
          <Banner />
          <CafeSection />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home