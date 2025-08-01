import { transform } from '@babel/core';
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';
// Pan Responder hook nativo para capturar so gestos de arrastar ou tocar

export default function CardArrastavel(){
    // Criar um valor anomado bidimensional (x e y) para controlar a posição do card
    const posicao = useRef( new Animated.ValueXY()).current
    // useState para controlar se o card está "sumido" (removido da tela)
    const [sumido, setSumido] = useState(false)
    // Interpola o valor da coordenada X para transformar em valor de rotação
    const rotacao = posicao.x.interpolate({
        inputRange:[-200, 0, 200], // Quanto o dadeo precisa mover horizontalmente
        outputRange:['-15deg', '0deg', '15deg'], // Rota o card em até 15 graus para cada lado
        extrapolate: 'clamp' // Impede que os valores ultrapassem os limites definidos
    })
    // Criar um objeto de estilo animado com rotação e posição do card
    const estiloAnimado = {
        transform:[
            {translateX: posicao.x}, // Move o card no eixo X conforme o gesto
            {translateY: posicao.y}, // Move o card no eixo Y conforme o gesto
            {rotate: rotacao}, // Aplica a rotação interpolada baseada em X
        ]
    }
    // Cria o PanResponder, que captura o gesto do usuário
    const panResponder = useRef(
        PanResponder.create({
            // Determina se o componente deve responder ao gesto (não responde se sumido)
            onMoveShouldSetPanResponder: () => !sumido,
            // Quando o dedo se move: atualiza os valores de X e Y com o movimento do dedo
            onPanResponderMove: Animated.event(
                [null,{dx: posicao.x, dy: posicao.y}],
                {useNativeDriver: false}
            ),
            // Quando o dedo é solto
            onPanResponderRelease: (e, gesture) =>{
                // Verifica se o card foi arrastado para a direita além de 150px
                // gesture é um objeto para captar o gesto ou toque
                if(gesture.dx > 150){
                    // Anima o card sainda da tela para na direita (500px fora da tela)
                    Animated.timing(posicao,{
                        toValue: {x:500, y:gesture.dy}, // Move para fora da tela no eixo x
                        duration: 300, // Duração em ms
                        useNativeDriver: false,
                    }).start(() => setSumido(true)) // Depois de animar, marca o card como sumido
                }
                // Verifica se o card for arrastado para a esquerda além de 150px
                else if(gesture.dx < -150){
                    // Anima o card saindo pela esquerda agora
                    Animated.timing(posicao,{
                        toValue: {x: -500, y: gesture.dy},
                        duration:300,
                        useNativeDriver: false
                    }).start(() => setSumido(true))
                }
                // Se o card não tenha ultrapassado o limite, retorna ao centro da tela com o efeito mola com o spring
                else{
                    Animated.spring(posicao, {
                        toValue: {x:0, y:0}, //Centro da tela
                        useNativeDriver: false
                    }).start()
                }

            }
        })
    ).current // .current para acessar o valor atual do useRef
    // Se o card está sumido, renderiza uma mensagem simples no luger

    if(sumido){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 18, color: '#444'}}>
                    O card saiu da tela!
                </Text>
            </View>
        )
    }



    // Renderiza a interface
    return(
        <View style={styles.container}>
            {/* Card animado que responde ao gesto */}
            <Animated.View
            style={[styles.card, estiloAnimado]} // Estilo fixo + animado
            {...panResponder.panHandlers} // Liga o gesto ao componente
            >
                <Text style={styles.titulo}>👀 Arraste-me !</Text>
                <Text style={styles.texto}> Arraste para os dois lados e solte para ver que eu saio da tela...</Text>
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E3F2FD',
        justifyContent: 'center',
        alignItems: 'center'
    },

    card:{
        width: 280,
        padding: 24,
        backgroundColor: '#90caf9',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5}, // Deslocamento de sombra(horizontal/vertical)
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0d47a1',
        marginBottom: 10,
        textAlign: 'center'
    },
    texto:{
        fontSize: 16,
        color: '#1e88e5',
        textAlign: 'center'
    }
})