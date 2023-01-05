import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./heroElements";

import {A, SPAN} from '../HeroSection/NBtn'

import Video from "../../videos/video.mp4";
import { Button } from "../HeroSection/buttonElement"
const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Aavishkar</HeroH1>
          <HeroP></HeroP>
          <HeroBtnWrapper>
            <A>
              <SPAN></SPAN>
              <SPAN></SPAN>
              <SPAN></SPAN>
              <SPAN></SPAN>
              About
            </A>
            <A>
              <SPAN></SPAN>
              <SPAN></SPAN>
              <SPAN></SPAN>
              <SPAN></SPAN>
              Events
            </A>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
