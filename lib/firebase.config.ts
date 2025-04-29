// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNZ1aVpWALpintHstXLPC9uyC992zzRfw",
  authDomain: "gas-monitoring-a2b73.firebaseapp.com",
  databaseURL: "https://gas-monitoring-a2b73-default-rtdb.firebaseio.com",
  projectId: "gas-monitoring-a2b73",
  storageBucket: "gas-monitoring-a2b73.firebasestorage.app",
  messagingSenderId: "800310337143",
  appId: "1:800310337143:web:ee210dbef149388e89b072",
  measurementId: "G-3XM3D945KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getDatabase(app);