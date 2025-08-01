// Importa o React para criar componentes e TextInput, StyleSheet e TextInputProps do React Native
import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

// Componente funcional que recebe todas as propriedades válidas para um TextInput (via TextInputProps)
export default function Input(props: TextInputProps) {
  return (
    // Retorna um componente TextInput do React Native com estilos e propriedades recebidas
    <TextInput
      style={styles.input}                // Aplica o estilo definido abaixo
      placeholderTextColor="#999"         // Cor cinza para o texto do placeholder (quando o campo está vazio)
      {...props}                         // Espalha (passa) todas as outras propriedades recebidas para o TextInput, como value, onChangeText, secureTextEntry etc.
    />
  );
}

// Estilos para o componente Input usando StyleSheet do React Native
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,       // Borda fina de 1 pixel ao redor do input
    borderColor: '#ccc',  // Cor cinza clara para a borda
    borderRadius: 5,      // Bordas arredondadas com raio de 5 unidades
    padding: 10,          // Espaço interno entre o texto e a borda do input
    marginBottom: 12      // Espaço abaixo do input para separar dos próximos elementos
  }
});
