import React from 'react'
import {useRef} from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./navbar.css"
// import logo from "../../assets/logo.png"
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <nav className='navbar-container'>
      {/* <img src={logo} alt="logo" className='nav-logo' /> */}
          <a href="/" className='head'>Krishna Toys</a>
                <div className='nav-items'>
                  <a href='/' className='nav-li'>About</a>
                  <a href='/' className='nav-li'>Location</a>
                  <a href='/' className='nav-li'>Contact</a>
                  <button className="nav-btn nav-close-btn"onClick={showNavbar}>
                      <FaTimes />
                  </button>
                </div>
          <button className='nav-btn' onClick={showNavbar}>
              <FaBars  />
          </button>

    </nav>
  )
}

export default Navbar