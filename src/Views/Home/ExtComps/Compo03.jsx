import React from 'react'
import { Link } from 'react-router-dom'

const Compo03 = () => {
  return (
    <>
      <div id="compo03">
        <h1>Vitalize</h1>
        <div className="contcomchs1">
            <div id="contchsx23s">
            <img src="/assets/compo03x1.webp" alt="" />
            </div>
            <div id="contchildc2">
                <p>From soothing massages to revitalizing facials, our team of skilled therapists and beauticians are dedicated to enhancing your natural beauty and promoting a sense of From soothing massages to revitalizing facials, our team of skilled therapists and beauticians are dedicated to enhancing your natural beauty and promoting a sense.</p>
                <Link to={"/servcies"}>Our Services</Link>
            </div>
        </div>
        
        <img id='compo03s1x5s' src="/assets/redrossesbunch.webp" alt="" />
      </div>
    </>
  )
}

export default Compo03
