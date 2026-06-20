// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth' // 🆕 Import Authentication module

const firebaseConfig = {
  apiKey: 'AIzaSyDfQSrdrcG261fw18qDZ5h1g5zRkcuN27A',
  authDomain: 'seamlesscal.firebaseapp.com',
  projectId: 'seamlesscal',
  storageBucket: 'seamlesscal.firebasestorage.app',
  messagingSenderId: '727692989987',
  appId: '1:727692989987:web:7361d083af6c0a5a39c396',
  measurementId: 'G-T32CE44ZW6',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app) // 🆕 Initialize and export Auth service context
