// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBN6kAYRoFgohMaIXXv2h7cY21sIwNQUP0",
  authDomain: "budget-app-678f5.firebaseapp.com",
  projectId: "budget-app-678f5",
  storageBucket: "budget-app-678f5.appspot.com",
  messagingSenderId: "1050976629054",
  appId: "1:1050976629054:web:74757e30e79e4d7eef7c6f",
  measurementId: "G-F630NTYY9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) ;
const analytics = getAnalytics(app);

export {auth} ;