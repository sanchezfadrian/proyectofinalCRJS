// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYkcW5m3yp_VSfPanOU1OzmdnwbJ1-7wA",
  authDomain: "proyectofinalcrjs.firebaseapp.com",
  projectId: "proyectofinalcrjs",
  storageBucket: "proyectofinalcrjs.appspot.com",
  messagingSenderId: "485269929853",
  appId: "1:485269929853:web:4f68841bd3be2755f45614"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);