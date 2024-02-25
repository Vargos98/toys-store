import React from 'react'
import "./header.css"
import background from "../../assets/background.png"
import tria from "../../assets/2.jpg"
const Header = () => {
  return (
    <div className='header'>
      {/* <div className="shade"></div> */}
    
        <div className="left">
          <p className='header-para'>The Toys <br/>you can <br />Trust On!</p>
        </div>
        <div className="right">
          <img src={background} alt="background" className='header-img' />
        </div>

 


    </div>
  )
}

export default Header