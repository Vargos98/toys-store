import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className='navbar-container'>
        {/* <img src={logo} alt="logo" className='nav-logo' /> */}
        <a href="#" className='head'>Krishna Toys</a>
        <ul className='nav-items'>
          <li className='nav-li'>About</li>
          <li className='nav-li'>Location</li>
          <li className='nav-li'>Contact</li>
        </ul>
    
    </div>
  )
}

export default Navbar