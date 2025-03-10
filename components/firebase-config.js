// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnepO_6AOTYfrCLFlLPa4OzRuXNeGUFLE",
  authDomain: "dht22-data-1a9f9.firebaseapp.com",
  databaseURL: "https://dht22-data-1a9f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dht22-data-1a9f9",
  storageBucket: "dht22-data-1a9f9.appspot.com", // Fix incorrect URL
  messagingSenderId: "338859333997",
  appId: "1:338859333997:web:21505502f04828fdd52264"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export the Firebase app and database
export { firebaseApp, getDatabase };
