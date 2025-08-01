// Importa a função para inicializar o app Firebase
import { initializeApp } from 'firebase/app';

// Importa o serviço de autenticação do Firebase
import { getAuth } from 'firebase/auth';

// Importa o serviço de banco de dados Firestore do Firebase
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase com as credenciais do seu projeto (essas chaves são públicas, mas cuidado para não vazar credenciais secretas)
const firebaseConfig = {
  apiKey: "AIzaSyCShTO8UJtDA66Z_HBzqnYUxGS4Io6KRO4",
  authDomain: "perguntas-calouros.firebaseapp.com",
  projectId: "perguntas-calouros",
  storageBucket: "perguntas-calouros.firebasestorage.app",
  messagingSenderId: "820235037080",
  appId: "1:820235037080:web:0406a8a65b748b7bbba3ed",
};

// Inicializa o app Firebase com as configurações acima
const app = initializeApp(firebaseConfig);

// Exporta o serviço de autenticação inicializado para ser usado em outras partes do app
export const auth = getAuth(app);

// Exporta o serviço do Firestore (banco de dados em nuvem) inicializado para ser usado em outras partes do app
export const db = getFirestore(app);
