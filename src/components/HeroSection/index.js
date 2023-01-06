import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./heroElements";

import {A, SPAN} from '../HeroSection/NBtn'

import Video from "../../videos/video.mp4";
import { Link } from "react-router-dom";
const Hero = () => {


  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Aavishkar</HeroH1>
          <HeroP>Aavishakr is Nation level Technical synopsis</HeroP>
          <HeroBtnWrapper>
            <Link to="/about">
              <A>
                <SPAN></SPAN>
                <SPAN></SPAN>
                <SPAN></SPAN>
                <SPAN></SPAN>
                About
              </A>
            </Link>
            <Link to="events">
              <A>
                <SPAN></SPAN>
                <SPAN></SPAN>
                <SPAN></SPAN>
                <SPAN></SPAN>
                Events
              </A>
            </Link>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
