// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuB0KKUyHpTMuj6vYjWYHenn3uxzKHoxQ",
  authDomain: "to-do-pip.firebaseapp.com",
  projectId: "to-do-pip",
  storageBucket: "to-do-pip.appspot.com",
  messagingSenderId: "299918512362",
  appId: "1:299918512362:web:a5101c23e127fae97f8793",
};

// Initialize Firebas
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;