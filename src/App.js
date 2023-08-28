import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Carousel from './components/Carousel'
import Products from './components/Products'
import Location from './components/Location'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Carousel/>
      <Products/>
      <Location/>
    </div>
  )
}

export default App