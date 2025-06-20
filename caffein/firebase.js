// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { // địa chỉ của firebase nằm trong file .env
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_API_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_API_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_API_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_API_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)