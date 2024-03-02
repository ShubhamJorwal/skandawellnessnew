import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      
      <footer id='navsec'>
        <div id="navsec01sx">
<img src="/logo.png" alt="" />
        </div>
        <div id="navsec02sx">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>Services</Link></li>
            <li><Link to={"/"}>About Us</Link></li>
            <li><Link to={"/"}>Blogs</Link></li>
            <li><Link to={"/"}>Career</Link></li>
          </ul>
        </div>
        <div id="navsec03sx">
            <li><Link to={"/"}>Contact</Link></li>
            <li><Link to={"/"}>Book Appointment</Link></li>            
        </div>
      </footer>
    </>
  )
}

export default Navbar
