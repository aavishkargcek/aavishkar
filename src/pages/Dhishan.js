import React, { useState } from "react";
import Sidebar from '../components/Sidebar/index';
import Navbar from "../components/Navbar/index"
import DhishanComp from "../components/DhishanComp/DhishanComp";
const Dhishan = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <DhishanComp />
    </>
  );
};

export default Dhishan;
