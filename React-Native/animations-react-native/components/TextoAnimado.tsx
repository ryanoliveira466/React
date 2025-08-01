import React from "react";
import { useEffect, useRef } from "react";
import {Animated, Text, StyleSheet} from 'react-native'

// Componente funcional para exibir o texto com a animação fade e movimento horizontal

export default function TextoAnimado(){
    // Cria um valor animado para controlar a opacidade, começa em 0 (invisível)
    const fade = useRef(new Animated.Value(0)).current
    // Cria um valor animado para controlar o deslocamento horizontal, começa em -200(fora da tela à esquerda)
    const moveX = useRef(new Animated.Value(-200)).current
    // Hook que executa um efeito ao montar o componente (quando aparece na tela)
    useEffect(() =>{
    // Executa duas animações em paralelo: fade e o movimento horizontal
    Animated.parallel([
        Animated.timing(fade,{
            toValue: 1, // Anima o valor da opacidade até 1 (totalmente visível)
            duration: 1000, // A animação dura 1000 milisegundos (1 segundo)
            useNativeDriver: true
        }),
        Animated.timing(moveX,{
            toValue: 0, // Anima o deslocamento horizontal até 0 (posição normal)
            duration: 1000, // A animação dura 1000 milisegundos (1 segundo)
            useNativeDriver: true
        }),
    ]) .start() // Inicia as animações paralelas
    },[]) // Com o [] o efeito roda uma vez só ao montar
    return(
        // Animated.View permite aplicar estilos animados (com opacidade e transformações)
        <Animated.View
        style={[
            styles.caixa, // Aplica estilo na base da caixa
            {
                opacity: fade,
                transform:[{ translateX: moveX}] // Move horizontalmente conforme o valor animado
            }
        ]}
        >
            {/* Texto que será animado */}
            <Text style={styles.titulo}>Trabalhando com animações</Text>
        </Animated.View>
        
    )
}

const styles = StyleSheet.create({
    caixa: {
        backgroundColor: '#278ad',
        padding: 20,
        borderRadius: 12,
        marginBottom: 30,
        elevation: 3
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4b394f',
        textAlign: 'center'
    }
})