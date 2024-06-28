
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXMd6sksDNPl2TdjHKWDMx4LBMmwReGYg",
  authDomain: "proyectosi-5b0a6.firebaseapp.com",
  projectId: "proyectosi-5b0a6",
  storageBucket: "proyectosi-5b0a6.appspot.com",
  messagingSenderId: "77657342417",
  appId: "1:77657342417:web:62fa7d7a0b48497d5de0f0",
  measurementId: "G-0MP9LPNKLY"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();