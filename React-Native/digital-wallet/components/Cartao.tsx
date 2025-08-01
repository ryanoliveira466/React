import React from "react";
import { View, Text, ImageBackground, StyleSheet, ImageSourcePropType } from 'react-native'

//Definindo os tipos de propriedade
type Props = {
    nome: String,
    numero: String,
    validade: String,
    image: ImageSourcePropType //Imagem de fundo do cartão
}

//Componente funcional chamada CartaoCredito, com tipagem definida pelo tipo Props
const CartaoCredito: React.FC<Props> = ({ nome, numero, validade, image }) => {
    return (
        <ImageBackground
            source={image} // A imagem de fundo é passada como prop
            style={styles.cartao} // Estilo principal do cartão
            imageStyle={styles.imagemFundo}>

            {/* Exibe o nome do titular no cartão */}
            <Text style={styles.texto}>{nome}</Text>

            {/* Exibe o número do cartão */}
            <Text style={styles.texto}>{numero}</Text>

            {/* Exibe a validade do cartão */}
            <Text style={styles.texto}>{validade}</Text>
        </ImageBackground>
    )
}

export default CartaoCredito

// Fazendo a estilização
const styles = StyleSheet.create({
    cartao: {
        width: '100%',
        height: 180,
        marginBottom: 20,
        justifyContent: 'center',
        borderRadius: 12,
        overflow: 'hidden'
    },
    imagemFundo: {
        borderRadius: 12,
        resizeMode: 'cover'
    },
    texto: {
        textAlign:'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    }
})