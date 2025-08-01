
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PokemonList from '../../components/PokemonList';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🎮 Lista de Pokémons</Text>
      <PokemonList />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#cc0000',
  },
});
