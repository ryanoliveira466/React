import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from 'expo-router';

import TextoAnimado from "@/components/TextoAnimado";
import IconeGirando from "@/components/IconeGirando";
import BotaoPulsante from "@/components/BotaoPulsante";
import BotaoLocalizacao from "@/components/BotaoLocalizacao";
import BotaoCamera from "@/components/BotaoCamera";

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextoAnimado />
      <IconeGirando />
      <BotaoPulsante />
      <BotaoLocalizacao />
      <BotaoCamera />
      
      {/* TouchableOpacity with text */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/telaAcessoGaleria')}>
        <Text style={styles.buttonText}>Go to Galeria</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/telaAudio')}>
        <Text style={styles.buttonText}>Ir para Áudio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7eb78',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#4CAF50', // Green button background
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});