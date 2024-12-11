import React from 'react'
import Footer from '../components/Footer'
import NavbarContent from '../components/NavbarContent'
import About from '../components/About'
import Amenities from '../components/Amenities'
const Home = () => {
  return (
    <>
        <NavbarContent/>
        {/* <Landing/> */}
     
        <About/>   
       <Amenities/>
       <Footer/>
    </>
  )
}

export default Home
