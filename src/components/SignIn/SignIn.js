import React, {useState} from 'react'
import {AiOutlineGoogle} from 'react-icons/ai';
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase';
import {Cover, H1 ,Hide, Input, Container , LoginBtn, P, AltLogin, FaceBook, Google, PopUp} from './SignInElements'

import {  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const SignIn = () => {
  const [popUpStyle, setPopUpStyle] =  useState(<Hide />);
  
  const popup = () =>{
    setPopUpStyle(<PopUp/>)
    setTimeout(() => {
      setPopUpStyle(<Hide/>)
    }, 3000);
    <Link to="/src/pages/index.js"/>
  }
  const redirect = (props) =>{
    if(props.user)
    {
      <Link to='events'></Link>
    }
  }
  const googleAuth = () =>{
    const provider = new GoogleAuthProvider();
     signInWithPopup(auth, provider)
       .then((result) => {
         console.log(result);
         redirect(result);
       })
       .catch((error) => {
         console.log(error);
       });
  }

  return (
    <Container>
      <Cover>
        <H1>Login</H1>
        <Input type="text" placeholder="User Name" />
        <Input type="password" placeholder="Password" />
        <LoginBtn onClick={popup}>Login</LoginBtn>
        <P>or login using</P>
        <AltLogin>
          <FaceBook>
            {" "}
            <FaFacebookF color="white" size="32px" />{" "}
          </FaceBook>
          <Google onClick={googleAuth}>
            <AiOutlineGoogle color="white" size="40px" />
          </Google>
        </AltLogin>
      </Cover>
    </Container>
  );
}

export default SignIn