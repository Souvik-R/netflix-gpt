// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp-r7_ByVTdXMZSB2K6Yq8VId3iVQ6WC8",
  authDomain: "netflixgpt-12099.firebaseapp.com",
  projectId: "netflixgpt-12099",
  storageBucket: "netflixgpt-12099.appspot.com",
  messagingSenderId: "691385957559",
  appId: "1:691385957559:web:bbe8066fedac9f9a3fe132",
  measurementId: "G-7G9Q0DXR1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();