import React from 'react'

import Header from './myComponents/Header'
import Navbar from './myComponents/Navbar'
import Sectors from './myComponents/Sectors'
import Welcome from './myComponents/Welcome'

import './App.css'
import Footer from './myComponents/Footer'
import Slider from './myComponents/Slider'



export default function App() {
  return (
    <>
    
      <Header/>  
      <Navbar/>
      <Slider/>
      
      <Welcome/>
      <Sectors/>
      <Footer/>
   </>
  )
}
