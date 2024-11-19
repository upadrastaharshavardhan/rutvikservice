// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYbWIcviBdqIRseO51mpuvUttRO0WGYG4",
  authDomain: "therutvik-e7c64.firebaseapp.com",
  projectId: "therutvik-e7c64",
  storageBucket: "therutvik-e7c64.firebasestorage.app",
  messagingSenderId: "1001445243367",
  appId: "1:1001445243367:web:b1cc09522a4d6714b3a542",
  measurementId: "G-DC58PCXZ36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);