import React, { useState } from "react";
import Sidebar from '../components/Sidebar/index';
import Navbar from "../components/Navbar/index"
import Hero from "../components/HeroSection";
import InfoSection from "../components/InfoSection/index";
import Contact from "../components/Form";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  homeObjFour,
  homeObjFive,
} from "../components/InfoSection/data";
// import Services from "../components/services";
import Footer from "../components/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFive} />
      {/* <Services /> */}
      {/* <InfoSection {...homeObjThree} /> */}
      {/* <Contact />
      <Footer /> */} */
    </>
  );
};

export default Home;
