// Importa a função para inicializar o app Firebase
import {initializeApp} from 'firebase/app'
// Importa o serviço de autenticação do FireBase
import {getAuth} from 'firebase/auth'
// Importa o serviço de banco de dados Firestore do Firebase
import {getFirestore} from 'firebase/firestore'


// Configurando as credenciais do Firebase com as credenciais que teremos depois de configurar nosso projeto no Firebase
const firebaseConfig = {
    // apiKey: '', // Chave pública da API
    // authDomain: '',// Domínio autorizado para autenticação
    // projectId: '',// ID do projeto Firebase
    // StorageBucket: '',// Bucket para armazenar arquivos
    // messageingSendrId: '',//Id do remetente da mensagem (push notifications)
    // appId: '',//Id do app Firebase Web
    apiKey: "AIzaSyAUzM8e_EXl6O7u6lTMqrgswInXKDogtgM",
    authDomain: "tasks-844a0.firebaseapp.com",
    projectId: "tasks-844a0",
    storageBucket: "tasks-844a0.firebasestorage.app",
    messagingSenderId: "702142234617",
    appId: "1:702142234617:web:3ec54f5422ae440eb18728",
}

// Inicializa o app Firebase com as configurações acima
const app = initializeApp(firebaseConfig)
// Exporta o serviço de autenticação inicializado
export const auth = getAuth(app)
// Exporta o serviço Firestore (que é o banco de dados em nuvem)
export const db = getFirestore(app)