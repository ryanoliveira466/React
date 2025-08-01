import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const SushiHome = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sushi House</Text>

      <Image
        source={{ uri: 'https://conteudo.solutudo.com.br/wp-content/uploads/2020/02/sushi.jpg' }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>Os melhores sushis da cidade!</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/12/20095333/Temaki-de-salmao-1.webp' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Temaki</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://minhasreceitinhas.com.br/wp-content/uploads/2018/08/Sushi-filadelfia-uramaki-Sabor-na-Mesa-1024x591.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Uramaki</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/64EF898D-2EDD-4B47-A456-E6A7D137AC91/Derivates/00f76cac-64f6-4573-be4f-e604a7d99143.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Nigiri</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://uploads.metroimg.com/wp-content/uploads/2020/12/21162006/30jan2018-imagem-representativa-sashimi-1517329851502_1920x1280.jpg' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Sashimi</Text>
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

export default SushiHome;
