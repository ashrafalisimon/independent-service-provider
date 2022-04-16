// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTU_m2lOnDGdo-J5189jsBUXFGGdN9ih0",
  authDomain: "dream-focus-click.firebaseapp.com",
  projectId: "dream-focus-click",
  storageBucket: "dream-focus-click.appspot.com",
  messagingSenderId: "208231188014",
  appId: "1:208231188014:web:07d31b82a43b7ac1b141bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;