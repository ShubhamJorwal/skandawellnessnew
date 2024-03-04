import React, { useState } from 'react';
import './homeslider.scss'
import { Link } from 'react-router-dom';


const HomeSlider = () => {
   
  return (
    <div id='newconthomdslider'>
      <div className="homslx2-banner-slider">
          {/**/} <img id='homslx1ighsid' src="/assets/redrossesbunch.png" alt="" />
          <img id='homslx2ighsid' src="/assets/redrossesbunch.png" alt="" />
          <img id='homslx3ighsid' src="/assets/redrossesbunch.png" alt="" />
          <img id='homslx4ighsid' src="/assets/redrossesbunch.png" alt="" /> 
          <h1>Skanda Wellness</h1>
          <h3>Revitalize Your Wellness</h3>
          <p>Discover holistic treatments for mind, body, and spirit.</p>
          <Link to={"/services"}>Our Services</Link>
    </div>
    </div>
    
  )
}

export default HomeSlider
