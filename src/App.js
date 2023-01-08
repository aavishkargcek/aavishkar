import "./App.css";

import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { UserContext } from './context/UserContext';

//
import Home from "./pages";
import Events from "./pages/Events";
import About from "./pages/About";
import Dhishan from "./pages/Dhishan";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
//
import firebaseConfig from './config/firebase.config';
firebase.initializeApp(firebaseConfig);

//

function App() {
  const [user, setUser] =useState(null);

  return (
    <Router>
      
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/signin" element={ <SignIn /> } />
        <Route exact path="/signup" element={ <SignUp /> } />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />}></Route>
        <Route path="/dhishan" element={<Dhishan/>}></Route>
      </Routes>

      </UserContext.Provider>

    </Router>
  );
}
export default App;
