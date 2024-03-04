import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Toaster, toast } from 'react-hot-toast';

import './extrapagescss.scss'
import axios from 'axios'; // Import axios for making API requests
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const CareerPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        phone_no: '',
        email: '',
        messages: '',
        qualifications: '',
        dob: '',
        work_expeirce: '',
        areaofexpertise: '',
        location: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    // API endpoint for contact form
    const handleSubmit = async (e) => {
        e.preventDefault();

        // API endpoint for career form
        const apiUrlxs = `${apiUrl}/career_requests`;

        try {
            // Make API request using axios
            const response = await axios.post(apiUrlxs, formData);

            // Handle success (you can customize this part based on your needs)
            if (response.data.error === false) {
                toast.success('Career form submitted successfully');
                setFormData({
                    name: '',
                    last_name: '',
                    phone_no: '',
                    email: '',
                    messages: '',
                    qualifications: '',
                    dob: '',
                    work_expeirce: '',
                    areaofexpertise: '',
                    location: '',
                });
            }
            console.log(response.data)
            
        } catch (error) {
            // Handle error (you can customize this part based on your needs)
            if (response.data.error === true) {
                toast.error(response.data.message);
            }
        }
    };
    return (
        <>
            <Navbar />
            <div id="Careerpage">
                <div className="Contactus-banner-slider">
                    {/**/} <img id='homslx1ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx2ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx3ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx4ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <h1>Career</h1>
                    <h3>Explore Exciting Opportunities</h3>
                    <p>Discover rewarding career paths at Skanda Wellness. <br /> We're passionate about holistic well-being and seek dedicated individuals to join our team.</p>
                </div>

                <div id="con654s1x1x21s25">
                    <div className="conts654s">
                        <p>Skanda Wellness</p>
                        <h1>Join Our<span>Team</span></h1>
                        <p>Explore opportunities to grow professionally in a nurturing environment that values your skills and contributions.</p>
                        <img src="/assets/newlogoextralarge.png" alt="" id='imgcarlogskxs' />
                        <form onSubmit={handleSubmit} className="career-form">
                                <div className="con654s1x1">
                            <input
                                type="text"
                                name="name"
                                placeholder="First Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="number"
                                name="phone_no"
                                placeholder="Phone Number"
                                value={formData.phone_no}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
          
                            <input
                                type="text"
                                name="qualifications"
                                placeholder="Qualifications"
                                value={formData.qualifications}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="date"
                                name="dob"
                                placeholder="Date of Birth"
                                value={formData.dob}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="work_expeirce"
                                placeholder="Work Experience"
                                value={formData.work_expeirce}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="areaofexpertise"
                                placeholder="Area of Expertise"
                                value={formData.areaofexpertise}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            />
                                              <textarea
                                name="messages"
                                placeholder="Additional Information"
                                value={formData.messages}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                            <button type="submit">Submit</button>
                    </div>
                        </form>

                    </div>
                 
                </div>
            </div>
      <Toaster />
            <Footer />
        </>
    )
}

export default CareerPage
