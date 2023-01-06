import React from 'react'
import { Grid, Content, Logo, H1 } from './aboutElements'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Headding,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "../InfoSection/InfoElements";

import img from "../../images/photo1672999657.jpeg";
const Aboutus = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>About</TopLine>
                <Subtitle>
                  Aavishkaar is a National Level Technical Symposium which
                  creates a platform for technical and non - technical events.
                  With an aim to link an idea through innovation, it presents
                  Tech Expo and Dhishan. These events represents the idea-
                  diversifying concoction, along with the entertainment.{" "}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default Aboutus