import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function FormUser() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Nome:"></TextInput>
            <TextInput style={styles.input} placeholder="Email:"></TextInput>
            <TextInput style={styles.input} placeholder="Instituição:"></TextInput>
            <TextInput style={styles.input} placeholder="Profissão:"></TextInput>
        </View>
    )
    
}

const styles = StyleSheet.create({
    inputContainer: {
      width: '100%',
      marginVertical: 10,
      alignSelf: 'center',
    },
    input: {
        margin: 5,
      height: 50,
      backgroundColor: '#f2f2f2',
      borderRadius: 12,
      paddingHorizontal: 15,
      fontSize: 16,
      color: '#333',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
  });