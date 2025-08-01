import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import BotaoCamera from '@/components/BotaoCamera';

const RegistroPesquisa = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <BotaoCamera></BotaoCamera>

      {/* Campo: Nome */}
      <Text style={styles.label}>Nome</Text>
      <TextInput style={styles.input} placeholder="Digite o nome" />

      {/* Campo: Área de Pesquisa */}
      <Text style={styles.label}>Área de Pesquisa</Text>
      <TextInput style={styles.input} placeholder="Ex: Flora, Fauna, Solo..." />

      {/* Botão: Registrar */}
      <TouchableOpacity onPress={() => router.push('/(tabs)/registroEspecie')}  style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistroPesquisa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f5ea',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#c8e6c9',
    marginBottom: 15,
  },
  cameraButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 25,
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#a5d6a7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: '#388e3c',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
