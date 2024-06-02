// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh0dyjWWMQbbN2IREzIGwc6o71CpazScU",
  authDomain: "study-mate-eb1a8.firebaseapp.com",
  projectId: "study-mate-eb1a8",
  storageBucket: "study-mate-eb1a8.appspot.com",
  messagingSenderId: "311231599467",
  appId: "1:311231599467:web:1cc4f5a0f218d428edf22e",
  measurementId: "G-ZGVZ8VS5JX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);