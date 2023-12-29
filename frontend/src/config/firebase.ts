// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1gq3gbDvn5jqap5E3ocYuyXoondDL3Y",
  authDomain: "mern-social-media-39350.firebaseapp.com",
  projectId: "mern-social-media-39350",
  storageBucket: "mern-social-media-39350.appspot.com",
  messagingSenderId: "761886723202",
  appId: "1:761886723202:web:641078ddaa41e809edb89b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
