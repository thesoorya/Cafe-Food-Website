import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      setIsSticky(currentPosition > 10); // Check if scroll position is greater than 10px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleNavbar() {
    setOpenNavbar(!openNavbar)
  }

  return (
    <header>
      <nav className={`NavBar ${isSticky ? 'sticky' : ''}`} id="Navbar">
        <Link to={`/`} style={{
          textDecoration: "none",
          color: "black"
        }}><li className="NavItems"><h2>Cafe 9¾</h2></li></Link>

        <ul className={openNavbar ? 'NavList ActiveActive' : 'NavList'}>
          <Link to={`/`} style={{
            textDecoration: "none",
            color: "black"
          }}><li className="NavItems">Home</li></Link>
          <Link to={`/about`} style={{
            textDecoration: "none",
            color: "black"
          }}><li className="NavItems">About</li></Link>
          <Link to={`/foods/items`} style={{
            textDecoration: "none",
            color: "black"
          }}><li className="NavItems">Items</li></Link>
          
          <div className="AuthBtns">
            <Link to={'/login'}><button className="AuthButton">Login</button></Link>
            <Link to={'/register'}><button className="AuthButton">Sing Up</button></Link>
          </div>

          <IoMdClose className="CloseButton" onClick={handleNavbar} />
        </ul>

        <HiBars3 className={openNavbar ? 'OpenButton DeActive' : 'OpenButton'} onClick={handleNavbar} />

      </nav>
    </header>
  );
};

export default Navbar;
