import React from 'react'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Location from './components/Location/Location'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <About/>
    <Location/>
    <Contact/>
    </div>
  )
}

export default App