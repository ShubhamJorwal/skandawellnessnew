import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <>

      <footer id='footsec'>
          <img id='redflowersrighsid' src="/assets/redrossesbunch.png" alt="" />
          <img id='redflowersrighsidx2' src="/assets/singleredros.jpg" alt="" />
          <div id="footsecparentx1">
<img src="/logo.png" alt="" />
          <h1>Skanda Wellness</h1>
          </div>


          <div id="footsecparentx2">
          <div className="footsec01">
            <h3>Skanda Wellness</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reiciendis dignissimos aspernatur architecto!</p>
            <button>Book an Appointment</button>
          </div>
          <div className="footsec02">
            <h3>Important Links</h3>
            <ul>
              <li><Link to={"/"}>Book Online</Link></li>
              <li><Link to={"/"}>Purchase a Gift Certificate</Link></li>
              <li><Link to={"/"}>Spa Promotions</Link></li>
              <li><Link to={"/"}>Exclusive Offers & Events</Link></li>
              <li><Link to={"/"}>Blog and News</Link></li>
            </ul>
          </div>
          <div className="footsec03">
          <h3>Contact Us</h3>
            <ul>
              <li><Link to={"/"}>Vesturbraut 17-3Keflavík, Iceland</Link></li>
              <li><Link to={"/"}>reina@qodeinteractive.com</Link></li>
              <li><Link to={"/"}>Phone: +351 258 548</Link></li>
              
            </ul>
          </div>
          <div className="footsec04">
            <h3>Opening Hours</h3>
            <ul>
              <li><Link to={"/"}><span>Monday to Friday:</span><span>09:00 - 20:00 hrs</span></Link></li>
              <li><Link to={"/"}><span>Saturday:</span><span>09:00 - 18:00 hrs</span></Link></li>
              <li><Link to={"/"}><span>Sunday:</span><span>09:00 - 18:00 hrs</span></Link></li>
              <li>
                <ul>
                  <li><Link to={"/"}><IoLogoInstagram /></Link></li>
                  <li><Link to={"/"}><CiFacebook /></Link></li>
                  <li><Link to={"/"}><FaPinterestP /></Link></li>
                  <li><Link to={"/"}><CiLinkedin /></Link></li>
                  <li><Link to={"/"}><FaXTwitter /></Link></li>
                </ul>
                </li>
            </ul>
          </div>
          </div>

          <div id="footsecparentx3">
            <p>© 2024, All Rights Reserved</p>
          </div>
      </footer>
    </>
  )
}

export default Footer
