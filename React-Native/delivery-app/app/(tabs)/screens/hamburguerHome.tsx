import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HamburguerHome = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Burger King</Text>

      <Image
        source={{ uri: 'https://i.pinimg.com/736x/d0/1e/8d/d01e8d487609643100fa3f00c810d4a7.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Os melhores hambúrguers da cidade!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://d3sn2rlrwxy0ce.cloudfront.net/whopper-thumb.png?mtime=20210916125149&focal=none' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Whopper</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://d3sn2rlrwxy0ce.cloudfront.net/Cheeseburger_duplo-thumb.png?mtime=20230202110228&focal=none' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Cheeseburger Duplo</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://d3sn2rlrwxy0ce.cloudfront.net/big-king-thumb.png?mtime=20210916134350&focal=none' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>King</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://d3sn2rlrwxy0ce.cloudfront.net/Stacker_Duplo_Bacon-thumb-cupom-m-d.png?mtime=20220825142919&focal=none' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Stacker Duplo Bacon</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff8f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

export default HamburguerHome;
