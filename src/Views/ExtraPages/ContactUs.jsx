import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Toaster, toast } from 'react-hot-toast';

import './extrapagescss.scss'
import axios from 'axios'; // Import axios for making API requests
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone_no: '',
        email: '',
        messages: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // API endpoint for contact form
        const apiUrlxs = `${apiUrl}/contact_requests`;

        try {
            // Make API request using axios
            const response = await axios.post(apiUrlxs, formData);

            // Handle success (you can customize this part based on your needs)
            if (response.data.error === false) {
            toast.success('Form submitted successfully');
            setFormData({
                name: '',
                phone_no: '',
                email: '',
                messages: '',
            });
        }
        } catch (error) {
            // Handle error (you can customize this part based on your needs)
           if (response.data.error === false) {
                toast.error(response.data.message);
            }
            console.log(5)
        }
    };
    return (
        <>
            <Navbar />
            <div id="contactuspage">
                <div className="Contactus-banner-slider">
                    {/**/} <img id='homslx1ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx2ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx3ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <img id='homslx4ighsid' src="/assets/redrossesbunch.png" alt="" />
                    <h1>Contact Us</h1>
                    <p>Reach out effortlessly. We're here to assist you promptly <br /> with any inquiries or feedback you may have.</p>
                </div>

                <div id="contax125s32">
                    <div className="conts654s">
                        <p>Skanda Wellness</p>
                        <h1>Get In <span>Touch</span> With <span>Us</span></h1>
                        <p>Reach out effortlessly. We're here to assist you promptly with any inquiries or feedback you may have.</p>
                        
                            <form onSubmit={handleSubmit}>
                                <div className="con654s1x1">
                                    {/* Input fields for the form */}
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone_no"
                                        placeholder="Your Phone Number"
                                        value={formData.phone_no}
                                        onChange={handleInputChange}
                                        required
                                        maxLength="10"
                                        minLength="10"
                                        pattern="[0-9]*"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <textarea
                                        name="messages"
                                        placeholder="Your Message"
                                        value={formData.messages}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>

                                    {/* Submit button */}
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        
                    </div>
                    <div className="conts654sx23">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423196.05114715523!2d-118.55736096298023!3d34.03824914660364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1709547508147!5m2!1sen!2sin" width="600" height="380"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>ADDRESS : Centerl Park West LA87, New York</p>
                    <hr />
                    <p><span>EMAIL : info@example.com</span> <span>TIME : 16 : 00 - 19 : 00</span></p>
                    <hr />
                    <h2><TfiHeadphoneAlt /> +91 95991 61616</h2>
                    </div>
                </div>
            </div>
      <Toaster />
            <Footer />
        </>
    )
}

export default ContactUs
