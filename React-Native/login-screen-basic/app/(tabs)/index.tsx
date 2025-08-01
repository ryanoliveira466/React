import React from "react";
import { View, Text, Image, Button, ScrollView, StyleSheet, Dimensions, TextInput } from 'react-native';

// Get screen width and height
const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={[styles.container, { width, height }]}>
      <View style={{ display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'none', marginBottom:16}}>
        {/* Title */}
        <Text style={styles.title}>Login</Text>
        {/* Image */}
        <Image source={require('../../assets/images/login.jpg')} style={styles.image} />
      </View>

      {/* Scrollable Content */}
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <TextInput placeholder="Digite seu email:" keyboardType="default" style={styles.textInput} />
          <TextInput placeholder="Digite sua senha:" keyboardType="default" style={styles.textInput} />
          <Button title="Login" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    borderRadius:20,
    boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    letterSpacing:10,
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    maxWidth: "100%",
    borderRadius:20,
    boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    // Adjust height according to your image size
    resizeMode: 'contain', // Ensures the image fits within the container
  },
  scrollContainer: {
    boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    height: 250,
    borderRadius: 8,
    padding: 10,
    width: width - 40, // Makes the width 20px less than the screen width for padding
    backgroundColor: 'rgba(77, 0, 255, 0.4)'
  },
  scrollContent: {
    alignItems: 'center', // Centers content inside ScrollView
  },
  textInput: {
    width: "100%",
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5
  }
});
