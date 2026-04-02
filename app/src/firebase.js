import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7bzp2zrIKny-j8ZDgkL3NfGNTsM4whNo",
  authDomain: "toefl-writing-practice.firebaseapp.com",
  projectId: "toefl-writing-practice",
  storageBucket: "toefl-writing-practice.firebasestorage.app",
  messagingSenderId: "383195886043",
  appId: "1:383195886043:web:f77b1d5b369ae32dbd77fe",
  measurementId: "G-5S5LCHH8B2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
