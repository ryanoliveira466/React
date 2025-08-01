// app/home.tsx

// Importa React e hooks para gerenciar estado e ciclo de vida
import React, { useEffect, useState } from 'react';

// Importa componentes básicos do React Native para criar UI
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';

// Importa componente de input customizado para digitar tarefas
import Input from '../../components/Input';

// Importa componente que renderiza cada tarefa da lista
import TaskItem from '../../components/TaskItem';

// Importa as configurações do Firebase para autenticação e banco de dados
import { auth, db } from '../../services/firebase';

// Importa funções do Firestore para manipular dados no banco
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';

// Importa o tipo Task para tipar a lista de tarefas
import { Task } from '../../components/Task';

// Componente principal da tela Home, que lista as tarefas e permite adicionar novas
export default function Home() {
  // Estado para armazenar o texto digitado no input da tarefa
  const [texto, setTexto] = useState('');

  // Estado para armazenar o array de tarefas buscadas do Firestore
  const [tarefas, setTarefas] = useState<Task[]>([]);

  // Função assíncrona para salvar uma nova tarefa no Firestore
  const salvarTarefa = async () => {
    // Ignora se o texto estiver vazio ou só espaços
    if (texto.trim() === '') return;

    // Adiciona um novo documento na coleção 'tarefas' com os campos texto e user
    await addDoc(collection(db, 'tarefas'), {
      texto, // O texto da tarefa digitado
      user: auth.currentUser?.email || '', // Email do usuário autenticado para filtrar depois
    });

    // Limpa o campo input após salvar a tarefa
    setTexto('');
  };

  // useEffect que roda só uma vez após montar o componente
  useEffect(() => {
    // Cria uma query para buscar as tarefas onde o campo 'user' seja o email do usuário logado
    const q = query(
      collection(db, 'tarefas'), // Referência à coleção 'tarefas'
      where('user', '==', auth.currentUser?.email) // Filtro pela coluna 'user'
    );

    // Inscreve um listener em tempo real para receber atualizações das tarefas
    const unsub = onSnapshot(q, snapshot => {
      // Mapeia os documentos retornados para um array de tarefas tipado
      const dados: Task[] = snapshot.docs.map(doc => ({
        id: doc.id, // Id do documento para usar como chave na lista
        ...doc.data(), // Dados do documento (texto, user)
      })) as Task[];

      // Atualiza o estado tarefas com os dados recebidos do Firestore
      setTarefas(dados);
    });

    // Cleanup: quando o componente desmontar, cancela o listener para evitar vazamentos
    return () => unsub();
  }, []); // Dependência vazia faz rodar só uma vez

  // JSX que descreve o layout da tela
  return (
    // Container principal da tela, com estilo
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Minhas Tarefas</Text>

      {/* Campo input para digitar nova tarefa */}
      <Input
        placeholder="Digite sua tarefa" // Texto que aparece quando está vazio
        value={texto} // Estado que guarda o texto digitado
        onChangeText={setTexto} // Função para atualizar o estado quando digita
      />

      {/* Botão para adicionar tarefa */}
      <View style={styles.buttonContainer}>
        <Button title="Adicionar" onPress={salvarTarefa} color="#2563EB" />
      </View>

      {/* Lista que mostra as tarefas na tela */}
      <FlatList
        data={tarefas} // Dados que serão exibidos
        keyExtractor={item => item.id} // Chave única para cada item (necessário para performance)
        renderItem={({ item }) => <TaskItem item={item} />} // Componente que renderiza cada tarefa
        contentContainerStyle={styles.listContainer} // Estilo para a lista
      />
    </View>
  );
}

// Estilos da tela usando StyleSheet do React Native
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: '#F9FAFB', // Fundo claro
    padding: 20, // Espaçamento interno
  },
  title: {
    fontSize: 28, // Tamanho da fonte grande para o título
    fontWeight: '700', // Negrito forte
    color: '#1E3A8A', // Azul escuro para o texto
    marginBottom: 20, // Espaço abaixo do título
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
  buttonContainer: {
    marginBottom: 20, // Espaço abaixo do botão
  },
  listContainer: {
    paddingBottom: 40, // Espaço extra no final da lista para scroll confortável
  },
});
