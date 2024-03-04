import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import HomeSlider from "./ExtComps/HomeSlider";
import Compo01 from "./ExtComps/Compo01";
import Compo02 from "./ExtComps/Compo02";
import Compo03 from "./ExtComps/Compo03";
import Compo04 from "./ExtComps/Compo04";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSlider/> 
      <Compo04/>
      <Compo02/>
      <Compo01/>
      <Compo03/>
      <Footer />
    </>
  );
};

export default Home;
