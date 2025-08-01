// Configura o Firebase com Firestore e Storage
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCShTO8UJtDA66Z_HBzqnYUxGS4Io6KRO4",
  authDomain: "perguntas-calouros.firebaseapp.com",
  projectId: "perguntas-calouros",
  storageBucket: "perguntas-calouros.firebasestorage.app",
  messagingSenderId: "820235037080",
  appId: "1:820235037080:web:0406a8a65b748b7bbba3ed",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
