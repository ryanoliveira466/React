// Importa o React (necessário para JSX e componentes funcionais)
import React from 'react';

// Importa componentes e utilitários de estilo do React Native
import { View, Text, Image, StyleSheet } from 'react-native';

// Define o tipo das propriedades (props) que o componente espera receber
type Props = {
  nome: string;     // Nome do Pokémon a ser exibido
  imagem: string;   // URL da imagem do Pokémon
  altura: number;
  peso: number;
};

// Define o componente funcional chamado "PokemonCard"
// Recebe as props desestruturadas: nome e imagem
export default function PokemonCard({ nome, imagem, altura, peso}: Props) {
  return (
    // Container do card com estilo personalizado
    <View style={estilos.card}>
      {/* Exibe a imagem do Pokémon usando a URL recebida via props */}
      <Image source={{ uri: imagem }} style={estilos.imagem} />

      {/* Exibe o nome do Pokémon, estilizado */}
      <Text style={estilos.nome}>{nome}</Text>
      <Text style={estilos.altura}>{altura}</Text>
      <Text style={estilos.peso}>{peso}</Text>
    </View>
  );
}

// Define os estilos do componente usando StyleSheet
const estilos = StyleSheet.create({
  // Estilo do contêiner principal (card)
  card: {
    backgroundColor: '#fff0f0',  // Cor de fundo rosa claro
    padding: 10,                 // Espaçamento interno
    borderRadius: 10,           // Bordas arredondadas
    marginBottom: 15,           // Espaço abaixo do card
    alignItems: 'center',       // Centraliza conteúdo horizontalmente
  },

  // Estilo da imagem do Pokémon
  imagem: {
    width: 100,                 // Largura da imagem
    height: 100,                // Altura da imagem
    marginBottom: 10,          // Espaçamento abaixo da imagem
  },

  // Estilo do texto com o nome do Pokémon
  nome: {
    fontSize: 18,               // Tamanho da fonte
    textTransform: 'capitalize', // Capitaliza a primeira letra
  },

  altura: {
    fontSize: 18,               // Tamanho da fonte
    textTransform: 'capitalize', // Capitaliza a primeira letra
  },

  peso: {
    fontSize: 18,               // Tamanho da fonte
    textTransform: 'capitalize', // Capitaliza a primeira letra
  },
});
