import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Task } from "./Task";

// Definindo o tipo das Props
type Props = {
    item: Task
}

// Componente funcional que recebe uma tarefa e exibe seu texto na tela
export default function TaskItem({item}: Props){
    return(
        <View style={styles.card}>
            <Text> * {item.texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#eee',
    borderRadius: 6
  }  
})