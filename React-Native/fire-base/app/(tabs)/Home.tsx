import React, { useState, useEffect } from "react";
import {View, Button, FlatList, Text, StyleSheet} from 'react-native'
import Input from "../../components/Input";
import TaskItem from "@/components/TaskItem";
// Importar as configurações do Firebase para autenticação e banco de dados
import {auth, db } from '../../services/firebase'
// Importar funções do FireStore para manipular dados no banco 
import {addDoc, collection, onSnapshot, query, where} from "firebase/firestore"
import { Task } from "../../components/Task";

export default function Home(){
    // Estado para armazenar o texto digitado no input da tarefa
    const [texto, setTexto] = useState(' ')
    //Estado para armazenar o array de tarefas buscadas do Firestore
    const[tarefas, setTarefas] = useState<Task[]>([])
    // Função assíncrona para salvar uma nova tarefa no Firestore
    const salvarTarefa = async () => {
        // ignora se o texto estiver vazio ou só espaço
        if(texto.trim() === '') return

        // Adiciona um novo documento na coleção 'tarefas' com os campos texto e user
        await addDoc(collection(db, 'tarefas'),{
            texto, // texto da tarefa digitado
            user:auth.currentUser?.email || '', // Email do usuário autenticado para filtrar depois

        })
        // Limpando o campo do input após salvar a tarefa
        setTexto('')
    }
    // useEffect que roda só uma vez após montar o componente
    useEffect(() => {
        // Cria uma query para buscar as tarefas onde o campo 'user' seja o email do usuário logado
        const q = query(
            collection(db, 'tarefas'), // referência à coleção 'tarefas'
            where('user', '==', auth.currentUser?.email) // Filtro pela coluna 'user'
        )
        // Inscreve um listener em tempo real para receber atualizações das tarefas
        const unsub = onSnapshot(q, snapshot => {
            // Mapeia os documentos retornados para um array de tarefas tipado
            const dados: Task[] = snapshot.docs.map(doc => ({
                id: doc.id, // id do documento para usar como chave na lista
                ...doc.data(), // Dados do documento (texto, user)
            })) as Task[]
                // Atualiza o estado tarefas com os dados recebidos do Firestore
                setTarefas(dados)
            
        })
        // Cleanup: então quando o componente desmontar, cancela o listener
        return() => unsub()
    },[])
    // Layout da tela
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Minhas Tarefas</Text>
            <Input
            placeholder="Digite sua tarefa"
            value={texto}
            onChangeText={setTexto}
            />
            {/**Botão para adicionar tarefa  */}
            <View style={styles.buttonContainer}>
                <Button title="Adicionar" onPress={salvarTarefa} color="#2563EB " />
            </View>
            <FlatList
            data={tarefas}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <TaskItem item={item} />} // renderiza cada tarefa
            contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        padding: 20,
    },
    title:{
        fontSize: 28,
        fontWeight: '700',
        color: '#1E3A8A',
        marginBottom: 20,
        textAlign: 'center'
    },
    buttonContainer: {
        marginBottom: 20,
    },
    listContainer: {
        paddingBottom: 40,
    }
})