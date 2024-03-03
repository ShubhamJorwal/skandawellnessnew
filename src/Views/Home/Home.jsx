import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import HomeSlider from "./ExtComps/HomeSlider";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSlider/>
      <Footer />
    </>
  );
};

export default Home;
