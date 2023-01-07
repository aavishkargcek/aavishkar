// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDla9AYz-PP0OMe6I6CthO3qc9KyPg7kqI",
  authDomain: "aavishkar-auth.firebaseapp.com",
  projectId: "aavishkar-auth",
  storageBucket: "aavishkar-auth.appspot.com",
  messagingSenderId: "934321441492",
  appId: "1:934321441492:web:5dbb393231ed6e8ce00941",
  measurementId: "G-MQ71SFR6RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInwithGoogle = () =>{
    signInWithPopup(auth, provider).then((result)=>{
        console.log(result);
        
    }).catch((error) =>{
        console.log(error);
    })
}

// const analytics = getAnalytics(app);