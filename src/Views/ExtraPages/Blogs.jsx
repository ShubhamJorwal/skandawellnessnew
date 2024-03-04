import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Loader02 from '../../components/Loader/Loader02';
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrlxsfdd = `${apiUrl}/blog_list`;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(apiUrlxsfdd);
                if (response.data.error === false) {
                    setBlogs(response.data.result);
                } else {
                    console.error(response.data.message);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false); // Update loading state regardless of success or failure
            }
        };

        fetchBlogs();
    }, []);
    return (
        <>
            <Navbar />
            <div id="BlogsPage">
                <div className="Contactus-banner-slider">
                    {/**/} <img id='homslx1ighsid' src="/assets/redrossesbunch.webp" alt="" />
                    <img id='homslx2ighsid' src="/assets/redrossesbunch.webp" alt="" />
                    <img id='homslx3ighsid' src="/assets/redrossesbunch.webp" alt="" />
                    <img id='homslx4ighsid' src="/assets/redrossesbunch.webp" alt="" />
                    <h1>Explore Our Latest Blogs</h1>
                    <h3>Stay Informed, Stay Inspired</h3>
                    <p>Dive into our collection of insightful articles covering wellness <br /> tips, beauty trends, self-care advice, and more.</p>
                </div>

                <div id="BlogsContent">
                    <div className="conts654s">
                        <p>Skanda Wellness</p>
                        <h1><span>Explore</span> Our <span>Latest</span> Blogs</h1>
                        <p>Discover inspiration to nurture your mind, body, and soul on your journey to holistic well-being.</p>
                        <img src="/assets/newlogoextralarge.webp" alt="" id='imgcarlogskxs' />
                    </div>
                </div>


                <div id="">
                    {loading ? (
                        <Loader02 />
                    ) : (
                        <div id='BlogsContentx25s'>
                            {blogs.map((blog) => (
                                <div id=''>
                                    <h1>{blog.title}</h1>
                                    <div id='blogsx25se23s' key={blog.id}>
                                        <img src={blog.image} alt={blog.title} />
                                        <p>{blog.description}</p>
                                        <p>{new Date(blog.created_at).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blogs
