import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Items from "./pages/Items/Items";
import Product from "./pages/Product/Product";
import CategoryItem from './pages/CategoryItem/CategoryItem';
import Register from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/foods/items" element={<Items />} />
          <Route path="/foods/items/:category" element={<CategoryItem />} />
          <Route path="/foods/:name" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ BrowserRouter>
    </>
  )
}

export default App
