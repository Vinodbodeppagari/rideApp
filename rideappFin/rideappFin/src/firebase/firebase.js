import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC84IVZe1HUcb3AIWnjl3TfAJ5sFzJt_DY",
  authDomain: "rideshareapp-1bf59.firebaseapp.com",
  projectId: "rideshareapp-1bf59",
  storageBucket: "rideshareapp-1bf59.appspot.com",
  messagingSenderId: "1049314562286",
  appId: "1:1049314562286:web:9d02b94b47b7ae3d4ce3ff",
  measurementId: "G-FXZER6NJYC"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  getAdditionalUserInfo,
};
