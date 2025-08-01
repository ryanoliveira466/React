import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

//Definindo os tipos possíveis de avaliação de anime
type Avaliacao = 'nenhuma' | 'ruim' | 'legal' | 'incrivel'

type Props = {
    nome: String
}

//Componente principal
export default function ClassificadorAnime({nome}: Props) {
    //Estado que armazena a avaliação escolhida (começamos com 'nenhuma')
    const [avaliacao, setAvaliacao] = useState<Avaliacao>('nenhuma')

    //Função que retorna um estilo de cor com base an avaliação escolhida
    const definirCor = () => {
        switch (avaliacao) {
            case 'ruim':
                return styles.vermelho
            case 'legal':
                return styles.amarelo
            case 'incrivel':
                return styles.verde
            default:
                return styles.neutro
        }
    }

    return (
        //View principal com estilo base + cor de fundo dinâmica
        <View style={[styles.container, definirCor()]}>
            {/* Título do Anime */}
            <Text style={styles.titulo}>☀️ {nome}</Text>
            {/* Subtitulo explicativo */}
            <Text style={styles.subtitulo}>Classifique o anime: </Text>
            {/* Botões para escolher a avaliação */}
            <View style={styles.botoes}>
                {/* Cada botão define uma avaliação ao ser clicado e muda a cor de fundo */}
                <Button title='Ruim' color="#d32f2f" onPress={() => setAvaliacao('ruim')}></Button>
                <Button title='Legal' color="#d32f2f" onPress={() => setAvaliacao('legal')}></Button>
                <Button title='Incrivel' color="#d32f2f" onPress={() => setAvaliacao('incrivel')}></Button>
            </View>
            {/* Mostra a avaliação escolhida somente se for diferente de nehuma */}
            {avaliacao !== 'nenhuma' && (
                <Text style={styles.msg}>
                    Você achou o anime {avaliacao.toUpperCase()}!
                </Text>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
        borderRadius: 15,
        margin: 10,
        alignItems: 'center',
        gap: 15,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitulo: {
        fontSize: 18,
    },
    botoes: {
        gap: 10,
    },
    msg:{
        marginTop: 15,
        fontSize: 18,
        fontStyle: 'italic',
    },
    vermelho: {
        backgroundColor: 'red'
    },
    amarelo: {
        backgroundColor: 'yellow'
    },
    verde: {
        backgroundColor: 'green'
    },
    neutro: {
        backgroundColor: 'grey'
    }
})