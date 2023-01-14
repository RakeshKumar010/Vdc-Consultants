import React from 'react'
import Logo from './logo.png'
export default function Navbar() {
  return (
    <>
    <div className="navbar">
   <img src={Logo} alt="logo" className='logo' />
    <ul>
        <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
        <li><a href="/" target="_blank" rel="noopener noreferrer">Project</a></li>
        <li><a href="/" target="_blank" rel="noopener noreferrer">Sectors</a></li>
        <li><a href="/" target="_blank" rel="noopener noreferrer">Services</a></li>
        <li><a href="/" target="_blank" rel="noopener noreferrer">Careers</a></li>
        <li><a href="/" target="_blank" rel="noopener noreferrer">About Us</a></li>
        <li><a href="/" target="_blank" rel="noopener noreferrer">Contect Us</a></li>
    </ul>
    </div>
 
    </>
  )
}
