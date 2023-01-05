import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const animate1 = keyframes`
    0%{
        left: -100%;
    }
    50%, 100%{
        left: 100%;
    }
`;

const animate2 = keyframes`
    0%{
        top: -100%;
    }
    50%, 100%{
        top: 100%;
    }
`;

const animate3 = keyframes`
    0%{
        right: -100%;
    }
    50%, 100%{
        right: 100%;
    }
`;

const animate4 = keyframes`
    0%{
        bottom: -100%;
    }
    50%, 100%{
        bottom: 100%;
    }
`;

export const SPAN = styled.span`
  position: absolute;
  display: block;

  &:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${animate1} 1s linear infinite;
  }
  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: ${animate2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: ${animate3} 1s linear infinite;
    animation-delay: 0.5s;
  }

  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: ${animate4} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;

export const A = styled.a`
    display: inline-block;
    position: relative;
    padding: 10px 15px;
    margin: 0 20px ;
    color: #03e9f4;
    font-size: 24px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    letter-spacing: 4px;
    -webkit-box-reflect: below 1px linear-gradient(transparent);
    &:hover{
        cursor: pointer;
        background: #03e9f4;
        color: #050801;
        box-shadow: 0 0 5px #03e9f4, 0 0 10px #03e9f4, 0 0 15px #03e9f4, 0 0 20px #03e9f4
    }

    &:nth-child(1)
    {
        filter: hue-rotate(290deg)
    }

    &:nth-child(3)
    {
        filter: hue-rotate(110deg)
    }
`;


