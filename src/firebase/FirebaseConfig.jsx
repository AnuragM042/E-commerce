// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKPRGQGtVHtjTIuHv7W7dxWaZfedigiBY",
  authDomain: "react-ecommerce-5bb4e.firebaseapp.com",
  projectId: "react-ecommerce-5bb4e",
  storageBucket: "react-ecommerce-5bb4e.appspot.com",
  messagingSenderId: "139750001197",
  appId: "1:139750001197:web:16f692938d17479b6d06a4",
  measurementId: "G-ENBN4P1QN1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { fireDB, auth };
