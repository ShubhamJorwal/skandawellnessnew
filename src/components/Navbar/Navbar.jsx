import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import BookAppointments from "../../Views/Services/BookAppointment/BookAppointments";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(10);
    }, 10);

    const timer2 = setTimeout(() => {
      setProgress(20);
    }, 100);

    const timer3 = setTimeout(() => {
      setProgress(30);
    }, 300);

    const timer4 = setTimeout(() => {
      setProgress(100);
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);


  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
   






  // book apt sidebar

  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };
  return (
    <>
          <LoadingBar
        color="#fe9f23"
        height="3px"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <div id="navsec" className={scrolled ? "scrolledNavbar" : ""}>
        <nav id="">
          <div id="navsec01sx">
            <Link to={"/"}><img src="/logo.png" alt="" /></Link>
          </div>
          <button className="toggle-btnx1s" onClick={toggleSidebar}><CiMenuFries /></button>
          <div className={`sidebarxmenun ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}><RxCross2 /></button>
      <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/career"}>Career</Link>
              </li>
              <li>
              <Link to={"/contact-us"}>Contact</Link>
            </li>
            <li id="buttonnavbapt">
              <Link to={"/"}>Book Appointment</Link>
            </li>
            </ul>
    </div>
          <div id="navsec02sx">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/career"}>Career</Link>
              </li>
              <li>
              <Link to={"/contact-us"}>Contact</Link>
            </li>
            <li id="buttonnavbapt">
              <Link onClick={toggleSlider}>Book Appointment</Link>
            </li>
            </ul>
          </div>
          {/* <div id="navsec03sx">
        
            <li>
              <Link to={"/"}>Book Appointment</Link>
            </li>
          </div> */}
        </nav>
      </div>
      <BookAppointments isOpen={isSliderOpen} onClose={toggleSlider} />
      <div id="coverhideareofnavbar"></div>
    </>
  );
};

export default Navbar;
