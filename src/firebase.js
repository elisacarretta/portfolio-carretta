// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// 🔑 Configurazione generata da Firebase Console (non modificarla a mano)
const firebaseConfig = {
  apiKey: "AIzaSyAE6A4PHapGnHCzhezHkQ6fNXV8FPuonpA",
  authDomain: "portfolio-carretta.firebaseapp.com",
  projectId: "portfolio-carretta",
  storageBucket: "portfolio-carretta.firebasestorage.app",
  messagingSenderId: "733050475469",
  appId: "1:733050475469:web:7da8ff788ecbd67e7baa84"
}

// Inizializza Firebase
const app = initializeApp(firebaseConfig)

// Inizializza Firestore
const db = getFirestore(app)

// ✅ Esporta Firestore per usarlo nel resto del progetto
export { db }





