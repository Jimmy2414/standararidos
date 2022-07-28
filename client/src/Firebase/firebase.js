// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG2JjWCibNPrA7pGpT4azkoBHg8PmP59k",
  authDomain: "standararidos-2a573.firebaseapp.com",
  projectId: "standararidos-2a573",
  storageBucket: "standararidos-2a573.appspot.com",
  messagingSenderId: "364196849575",
  appId: "1:364196849575:web:8fafb44d06aa363483b882",
  measurementId: "G-NDE02LLT6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)