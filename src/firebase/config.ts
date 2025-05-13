// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj4Kux1_g_AGo4sHcxI0B_0jfybGJE21M",
  authDomain: "astro-authentication-81ebd.firebaseapp.com",
  projectId: "astro-authentication-81ebd",
  storageBucket: "astro-authentication-81ebd.firebasestorage.app",
  messagingSenderId: "262673419707",
  appId: "1:262673419707:web:0822dcd19155c9300e889e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const firebase = {
  app,
  auth,
};
