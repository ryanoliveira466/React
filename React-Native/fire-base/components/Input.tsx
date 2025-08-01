import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

// Criando um componente funcional que recebe todas as propriedades válidas para um TextInput (via TextInputProps)

export default function Input(props: TextInputProps){
    return(
        <TextInput
        style = {styles.input}
        placeholderTextColor={"#999"}
        {...props}
        />
    )
}

// Estilos
const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 12
    }
})