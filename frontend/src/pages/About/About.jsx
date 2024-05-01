import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'
import AboutPage from '../../components/AboutComponents/AboutPage'
import Footer from "../../components/Footer/Footer"

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <AboutPage />
        <Footer />
      </div>
    </div>
  )
}

export default About