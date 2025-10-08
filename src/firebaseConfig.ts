// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDOCjQGnMEhNdmfHnZLrQiuj1vKTJksRM",
  authDomain: "chido-app.firebaseapp.com",
  projectId: "chido-app",
  storageBucket: "chido-app.firebasestorage.app",
  messagingSenderId: "296539722031",
  appId: "1:296539722031:web:5dad3e401de63f13a5d1da",
  measurementId: "G-42Q1HL42VP",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
