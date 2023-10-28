// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh0x_uEBDkwgWLCalwNO2nyrRd-_ujLPc",
  authDomain: "realtor-clone-data.firebaseapp.com",
  projectId: "realtor-clone-data",
  storageBucket: "realtor-clone-data.appspot.com",
  messagingSenderId: "861244312551",
  appId: "1:861244312551:web:22f19d73feb70efb860b42",
  measurementId: "G-VZ69JMN0F8"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db= getFirestore()
