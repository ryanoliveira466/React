import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <FontAwesome name="search" size={24} color="#333" />
      </TouchableOpacity>
      
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/IFood_logo_2018.svg' }}
        style={styles.logo}
      />
      
      <TouchableOpacity>
        <FontAwesome name="shopping-cart" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Header;
