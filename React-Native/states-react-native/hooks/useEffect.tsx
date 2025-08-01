import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'

export function UseEffectExample(){
    // Cria um estado para guardar a data/hora atual
    const [time, setTime] = useState(new Date())

    // useEffect executando apenas uma vez quando o componente for exibido pela primeira vez
    useEffect(() => {
        Alert.alert('Bem-vindo! Este é um app com React Native')
    }, []) // array vazio indica que esse efeito roda apenas uma vez
    
    // useEffect responsável por atualizar o relógio a cada segundo
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date()) // atualiza o estado com o novo horário
        }, 1000); // a cada 1000 milisegundos
        // Esta função é chamada automaticamente quando o componente for desmontado
        return() => clearInterval(timer)
    }, [])
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Relógio Atual</Text>
            <Text style={styles.time}>
                {time.toLocaleTimeString()} 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    time: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#27ae60'
    }
})