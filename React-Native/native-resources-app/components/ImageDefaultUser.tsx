import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImagemDefaultUser = () => {
    return (
      <View>
        {/* Imagem da foto tirada */}
        <Image
          source={require('../assets/images/placeholder-user.png')} // Substitua por imagem default ou estado
          style={styles.image}
        />
      </View>
    );
  };
  
  export default ImagemDefaultUser;
  
  const styles = StyleSheet.create({
      container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        backgroundColor: '#e6f5ea',
        padding: 20,
        alignItems: 'center',
      },
      image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#c8e6c9',
        marginBottom: 15,
      },
    });
    