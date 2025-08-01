import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Alert, Text } from 'react-native';
import Header from '../../components/Header';
import Categories from '../../components/Categories';
import Restaurants from '../../components/Restaurants';
import useTimeAlert from '../../hooks/ContagemRegrssiva'; // Importando o hook



const App = () => {
  const time = useTimeAlert(); // Usando o hook customizado para pegar o horário

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Categories />
        <Restaurants />
        <Text style={styles.time}>{time.toLocaleTimeString()}</Text> {/* Exibe o horário formatado */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  time: {
    fontSize: 36,
    fontWeight: '700',
    color: '#27ae60', // Verde, como no iFood
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
});

export default App;
