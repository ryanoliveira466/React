import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/nature.png')} // Substitua pelo caminho da sua imagem
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Verdata</Text>

      <TouchableOpacity onPress={() => router.push('/(tabs)/registroPesquisa')} style={styles.button}>
        <Text style={styles.buttonText}>Explorar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f5ea', // Verde claro suave
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2e7d32', // Verde escuro
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4caf50', // Verde vivo
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});