import React, {useState} from 'react'
import Aboutus from '../components/About'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SignIn from '../components/SignIn/SignIn';
const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      {/* <Aboutus /> */}
in the about
    </>
  );
}

export default About