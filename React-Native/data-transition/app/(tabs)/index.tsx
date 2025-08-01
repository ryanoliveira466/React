import React from "react";
import { StyleSheet, View } from 'react-native';
import Start from "@/components/Start";

export default function HomeScreen() {
  return (
   <View style={styles.container}>
    <Start></Start>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#f5f5f5', // Cor de fundo suave
    padding: 16, // Espaçamento interno
  },
});
