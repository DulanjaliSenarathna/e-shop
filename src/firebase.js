import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBFGVHc9G8b5JhD1klxlR-6McKNr0n7g0k",
    authDomain: "eshop-b7908.firebaseapp.com",
    projectId: "eshop-b7908",
    storageBucket: "eshop-b7908.appspot.com",
    messagingSenderId: "257710150602",
    appId: "1:257710150602:web:3199e74c8134eba2627533",
    measurementId: "G-73NGSG8YNG"
  };

const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {auth,db};


