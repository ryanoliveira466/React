import { router } from "expo-router";
import React from "react";
import { useRef } from "react";
import { Animated, Pressable, Text, StyleSheet } from 'react-native'

export default function BotaoPulsante(){
    // Cria um valor animado chamado 'scale' para controlar a escala do botão (tamanho)
    // Começa com 1 (tamamnho original)
    const scale = useRef(new Animated.Value(1)).current
    // Função que dispara a animação de pulsar no botão
    const animarBotao = () => {
        // Sequência de animações
        // 1. Aumenta a escala para 1.2
        // 2. Volta para o tamanho original
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            })
        ]).start(() => {
            router.push('/(tabs)/cardImagem')
        })

    }


    return(
        // Animated.View parmite aplicar o valor animado scale na transformação do botão
        <Animated.View style={{ transform: [{scale}]}}>
            {/* Pressable detecta o otuqe do usuário para disparar a animação */}
            <Pressable onPress={animarBotao} style={styles.botao}>
                <Text style={styles.textoBotao}>Clique aqui</Text>
            </Pressable>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    botao:{
        backgroundColor: '#388e3c',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 12,
    },
    textoBotao:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})