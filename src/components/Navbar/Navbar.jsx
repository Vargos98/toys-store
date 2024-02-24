import React from 'react'
import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./navbar.css"
import logo from "../../assets/logo.png"
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			{/* <h3>Shree Ji toys</h3> */}
      <img src={logo} alt="logo"  className='logo'/>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About</a>
				<a href="/#">Location</a>
				<a href="/#">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar