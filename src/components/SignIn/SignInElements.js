import styled from "styled-components";

export const Cover = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap");
  font-family: "DM Sans", sans-serif;
  background-color: #fff;
  width: 30em;
  height: 35em;
  position: relative;
  border-radius: 1em;
  box-shadow: 0 0.188em 1.588em rgb(156, 156, 156);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const H1 = styled.h1``;

export const Input = styled.input`
  border: none;
  height: 4em;
  width: 80%;
  border-radius: 0.25em;
  text-align: center;
  padding: 2em;

  background-color: rgb(229, 226, 266);
  &:focus {
    outline-color: rgb(32, 177, 255);
  }
`;

export const LoginBtn = styled.div`
  width: 40%;
  height: 2.5em;
  background-color: rgb(32, 177, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  border-radius: 0.25em;
  cursor: pointer;
  padding-top: 13px;
  font-weight: 400;
  font-size: 18px;
  &:hover {
    transform: scale(1.25);
  }
`;

export const P = styled.p`
  position: relative;
  bottom: -2em;
`;

export const AltLogin = styled.div`
  width: 80%;
  height: 3em;
  display: flex;
  justify-content: space-around;
`;

export const FaceBook = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 0.25em;
  background-color: black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  text-align: center;
  padding-top: 5px;
`;

export const Google = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 0.25em;
  background-color: black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  text-align: center;
`;

export const Hide = styled.div`
  display: none;
`;
export const PopUp = styled.div`
  position: absolute;
  height: 30em;
  width: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25em;
  background-color: black;
  color: white;
  bottom: 0;
  transform: scale(1);
`;
