// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA67KINmTpGvr3zO6cXXD-HYpnOknl-CSA",
  authDomain: "digital-comp.firebaseapp.com",
  projectId: "digital-comp",
  storageBucket: "digital-comp.appspot.com",
  messagingSenderId: "365220453852",
  appId: "1:365220453852:web:e1c7c1be70a0939e7c4319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app;