import React from 'react'

const Navbar = () => {
  return (
    <div className='h-50px w-full bg-black'>
        <div>
            <h1 className='text-yellow fs-5'>Toys or Us!</h1>
        </div>
        <div>
            <ul >
                <li >Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Location</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar