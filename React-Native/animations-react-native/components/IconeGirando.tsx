import { transform } from "@babel/core";
import React from "react";
import { useEffect, useRef } from "react";
import {Animated, Text, StyleSheet, Image} from 'react-native'


export default function IconeGirando(){
    // Criar um valor animado que vai de 0 a 1 e permanece entre renderizações usando useRef
    const loopAnim = useRef(new Animated.Value(0)).current
    // useEffect executa quando o componente é montado
    useEffect(() => {
        // Inicia uma animação em loop infinito que altera loopAim de 0 para 1 em 3000ms
        Animated.loop(
            Animated.timing(loopAnim, {
                toValue: 1, //Valor final da animação: 1
                duration: 3000, // Duração da animação: 3 segundos,
                useNativeDriver: true 
            })
        ).start() // Começa a animação em loop
    }, [])
    // Interpola o valor animado para transformar o número (0 a 1) em graus de rotação (0 a 360)
    const rotateInterpole = loopAnim.interpolate({
        inputRange: [0, 1], // Valores de entrada da animação
        outputRange: ['0deg', '360deg'], // Valores de saída correspondentes para a rotação
    })
    return(
        // Animated.Image permite aplicar estilos anomados na imagem
        <Animated.Image
         source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/2048px-Google_Chrome_icon_%28February_2022%29.svg.png'
         }}
         style={[
            styles.icone, // Aplica os estilos na imagem
            { transform: [{ rotate: rotateInterpole }]} // Aplica a rotação animada
        ]}
         />
        
    )
}

// Estilos
const styles = StyleSheet.create({
    icone: {
        width: 80,
        height: 80,
        marginBottom: 30,
    }
})