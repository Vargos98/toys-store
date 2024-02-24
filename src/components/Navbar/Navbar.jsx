import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import "./navbar.css"
// import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <nav className='navbar-container'>
        {/* <img src={logo} alt="logo" className='nav-logo' /> */}
        <a href="/" className='head'>Krishna Toys</a>
        <div className='nav-items'>
          <a href='/' className='nav-li'>About</a>
          <a href='/' className='nav-li'>Location</a>
          <a href='/' className='nav-li'>Contact</a>
          <button>
            <FaBars/>
          </button>
        </div>
        <button>
          <FaTimes/>
        </button>
    
    </nav>
  )
}

export default Navbar