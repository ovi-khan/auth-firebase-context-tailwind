// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtumvZWI65uUlrsC48z-Uf7dNZFTQKwEc",
  authDomain: "auth-firebase-context-ta-b7c43.firebaseapp.com",
  projectId: "auth-firebase-context-ta-b7c43",
  storageBucket: "auth-firebase-context-ta-b7c43.appspot.com",
  messagingSenderId: "862327883935",
  appId: "1:862327883935:web:0bf4a5503b97fdbed3baaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;