// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAJKcpNVFPZgPlMJTRt3TPuYNp_Gh9hk1g",
	authDomain: "gas-monitoring-32711.firebaseapp.com",
	databaseURL: "https://gas-monitoring-32711-default-rtdb.firebaseio.com",
	projectId: "gas-monitoring-32711",
	storageBucket: "gas-monitoring-32711.firebasestorage.app",
	messagingSenderId: "352873707331",
	appId: "1:352873707331:web:49779b3c91ac088aa3a1f6",
	measurementId: "G-NETTLJ6N17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
