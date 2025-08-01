// Importa o React para criar componentes
import React from 'react';

// Importa componentes básicos do React Native para criar a interface
import { View, Text, StyleSheet } from 'react-native';

// Importa o tipo Task definido em outro arquivo para garantir tipagem correta
import { Task } from '../components/Task';

// Define o tipo das props esperadas pelo componente: um objeto com a propriedade 'item' do tipo Task
type Props = {
  item: Task;
};

// Componente funcional que recebe uma tarefa (item) e exibe seu texto na tela
export default function TaskItem({ item }: Props) {
  return (
    // Container visual para a tarefa, com estilo de "card"
    <View style={styles.card}>
      {/* Exibe o texto da tarefa precedido de um ponto • para marcar a lista */}
      <Text>• {item.texto}</Text>
    </View>
  );
}

// Estilos para o card da tarefa
const styles = StyleSheet.create({
  card: {
    padding: 10,              // Espaço interno para o texto não encostar nas bordas
    marginBottom: 8,          // Espaço abaixo do card para separar das outras tarefas
    backgroundColor: '#eee',  // Fundo cinza claro para destacar o card
    borderRadius: 6           // Bordas arredondadas para um visual mais suave
  }
});
