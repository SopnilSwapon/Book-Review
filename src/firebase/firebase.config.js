// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD502HtRfL1WPU3BtJlBQ-uJCT1McDmanE",
  authDomain: "book-review-b64d7.firebaseapp.com",
  projectId: "book-review-b64d7",
  storageBucket: "book-review-b64d7.appspot.com",
  messagingSenderId: "396130898230",
  appId: "1:396130898230:web:603ca6e5391358ff0aa397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
