import React from 'react'
import './homeCompos.scss'

const Compo01 = () => {
  return (
    <>
      <div id="compo01">
        <div className="compo01c1">
            <span>
            <h1>Inner Harmony</h1>
            <p>Discover holistic treatments that restore balance and promote inner peace. We address stress, pain, and more.</p>
            </span>
            <img src="/assets/compo01x1.webp" alt="" />
        </div>
        <div className="compo01c1" id='compo01c1x2'>
            <span>
            <h1>Outer Radiance</h1>
            <p>Unleash your inner glow with our luxurious salon services. We offer haircuts, facials, massages, and more for a complete transformation.</p>
           </span>
        <img src="/assets/compo01x2.webp" alt="" />
        </div>
        <div className="compo01c1" id='compo01c1x1'>
            <img src="/assets/compo01x4.webp" alt="" />
        </div>
        <div className="compo01c1" id='compo01c1x3'>
           <span>
           <h1>Total Wellbeing</h1>
            <p>Experience holistic wellness at Skanda. We combine healing treatments with pampering salon services for a truly rejuvenating experience.</p>
           </span>
            <img src="/assets/compo01x3.webp" alt="" />
        </div>
      </div>
    </>
  )
}

export default Compo01
