// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCflRrbMCMOaSni3V7JW3KhTa3IcZnK22I",
  authDomain: "mahakal-10927.firebaseapp.com",
  projectId: "mahakal-10927",
  storageBucket: "mahakal-10927.appspot.com",
  messagingSenderId: "805951102313",
  appId: "1:805951102313:web:34e40ea803650acf6531f8",
  measurementId: "G-M791YW82D7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

