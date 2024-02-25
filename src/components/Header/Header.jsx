import React from 'react'
import "./header.css"
import background from "../../assets/background.png"

const Header = () => {
  return (
    <div className='header' id='home'>
     

      <div className="left">
        <p className='header-para'>
          The Toys <br />you can
          <br />Trust
          <span className='high'> On!</span>
        </p>
      </div>
      <div className="right">
        <img src={background} alt="background" className='header-img' />
      </div>




    </div>
  )
}

export default Header