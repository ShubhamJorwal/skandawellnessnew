import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
  return (
    <>
      <div id="navsec" className={scrolled ? "scrolledNavbar" : ""}>
        <nav id="">
          <div id="navsec01sx">
            <img src="/logo.png" alt="" />
          </div>
          <div id="navsec02sx">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Services</Link>
              </li>
              <li>
                <Link to={"/"}>About Us</Link>
              </li>
              <li>
                <Link to={"/"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/"}>Career</Link>
              </li>
              <li>
              <Link to={"/"}>Contact</Link>
            </li>
            <li id="buttonnavbapt">
              <Link to={"/"}>Book Appointment</Link>
            </li>
            </ul>
          </div>
          <div id="navsec03sx">
        
            <li>
              <Link to={"/"}>Book Appointment</Link>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
