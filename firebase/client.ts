// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNiIuEUQznqrrCrdVqrrfyt0JpH2-WJXA",
  authDomain: "prepwise-6881c.firebaseapp.com",
  projectId: "prepwise-6881c",
  storageBucket: "prepwise-6881c.firebasestorage.app",
  messagingSenderId: "1025076297044",
  appId: "1:1025076297044:web:016883a2474c41e669dcc1",
  measurementId: "G-FK937H1TG5",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
