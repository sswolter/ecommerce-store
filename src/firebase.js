// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXSW3vgwH5l2rZOYNB0f7m7Kjk-EBSuSU",
  authDomain: "buns-77efb.firebaseapp.com",
  projectId: "buns-77efb",
  storageBucket: "buns-77efb.appspot.com",
  messagingSenderId: "861338345459",
  appId: "1:861338345459:web:fbbfd63ae1859ec0fe3c86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
