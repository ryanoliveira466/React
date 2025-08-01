import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImagemDefaultSpecie = () => {
    return (
      <View>
        {/* Imagem da foto tirada */}
        <Image
          source={require('../assets/images/placeholder-specie.png')} // Substitua por imagem default ou estado
          style={styles.image}
        />
      </View>
    );
  };
  
  export default ImagemDefaultSpecie;
  
  const styles = StyleSheet.create({
      image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#c8e6c9',
        marginBottom: 15,
      },
    });
    