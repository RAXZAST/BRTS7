// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxx",
  authDomain: "brts7-by-raxz.firebaseapp.com",
  projectId: "brts7-by-raxz",
  storageBucket: "brts7-by-raxz.firebasestorage.app",
  messagingSenderId: "183523123500",
  appId: "1:183523123500:web:05da00a2858b0a4f840c89",
  measurementId: "G-59TQ3W7HXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);