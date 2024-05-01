import React from 'react'
import "./CategoryItem.css"
import Category from '../../components/CategoryItemComponent/Category'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
const CategoryItem = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <Footer />
    </div>
  )
}

export default CategoryItem