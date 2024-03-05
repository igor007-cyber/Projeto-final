// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeyOF2ybC6REncQjmt8bg4Tqx5cLEaaf0",
  authDomain: "chatif-f190d.firebaseapp.com",
  projectId: "chatif-f190d",
  storageBucket: "chatif-f190d.appspot.com",
  messagingSenderId: "687144987810",
  appId: "1:687144987810:web:eb3d5cc891cbd5a29c7bfb",
  measurementId: "G-PN7N8HX88K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
