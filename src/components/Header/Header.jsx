import React from 'react'
import "./header.css"
import header from "../../assets/header.png"
const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, recusandae.<br>

        </br> Excepturi ipsum minima unde assumenda fuga iure, quasi recusandae placeat culpa quam facere sapiente odit quis?</p>
      </div>
      <div className="right">
        <img src={header} alt="" />
      </div>
    </div>
  )
}

export default Header