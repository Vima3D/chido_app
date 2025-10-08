// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDOCjQGnMEhNdmfHnZLrQiuj1vKTJksRM",
  authDomain: "chido-app.firebaseapp.com",
  projectId: "chido-app",
  storageBucket: "chido-app.appspot.com", // 🔹 nota: corregí el .app a .appspot.com
  messagingSenderId: "296539722031",
  appId: "1:296539722031:web:5dad3e401de63f13a5d1da",
  measurementId: "G-42Q1HL42VP",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);
