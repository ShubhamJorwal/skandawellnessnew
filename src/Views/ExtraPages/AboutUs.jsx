import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Compab01 from './AboutComps/Compab01'
import Compab02 from './AboutComps/Compab02'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div id="AboutUsPage">
                <div className="Contactus-banner-slider">
                    <img id='homslx1ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx2ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx3ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx4ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <h1>Discover Skanda Wellness</h1>
                    <p>Explore our holistic sanctuary, blending traditional wisdom with modern practices, guiding individuals towards balance, vitality, and joy. Join our transformative journey.</p>
                </div>

                <div id="AboutUsPageContent">
                    <div className="conts654s">
                        <p>Skanda Wellness</p>
                        <h1>Our <span>Journey</span> to <span>Holistic</span> Well-being</h1>
                        <p>Journey to balance, vitality, and joy with us.</p>
                        <img src="/assets/newlogoextralarge.png" alt="" id='imgcarlogskxs' />
                    </div>
                </div>

                <Compab02 />
                <Compab01 />

            </div>
            <Footer />
        </>
    )
}

export default AboutUs
