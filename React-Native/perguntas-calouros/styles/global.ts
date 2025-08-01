// Importa o StyleSheet do React Native para criar estilos de forma otimizada
import { StyleSheet } from 'react-native';

// Exporta um objeto chamado 'global' que contém estilos reutilizáveis para o app
export const global = StyleSheet.create({
  // Estilo para container principal da tela
  container: {
    flex: 1,                // Faz o container ocupar toda a área disponível da tela
    padding: 20,            // Espaçamento interno de 20 unidades em todos os lados
    justifyContent: 'center'// Centraliza os elementos filhos verticalmente dentro do container
  },
  // Estilo para títulos de seções ou telas
  title: {
    fontSize: 24,           // Tamanho da fonte maior para destacar o título
    textAlign: 'center',    // Centraliza o texto horizontalmente
    marginBottom: 20        // Espaço abaixo do título para separar do próximo elemento
  },
  // Estilo para labels (rótulos) dos inputs ou textos explicativos
  label: {
    fontWeight: 'bold',     // Texto em negrito para chamar atenção
    marginBottom: 4         // Pequeno espaço abaixo para separar do campo seguinte
  }
});
