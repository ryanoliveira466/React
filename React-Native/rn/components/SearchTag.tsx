import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

type Props = {
    // Função que será chamada ao realizar a busca, recebendo a tag pesquisa
    onBuscar: (tag: string) => void
}

export default function SearchTag( {onBuscar}: Props ){
    // Estado local que guarda o texto digitado
    const [tag, setTag] = useState(' ')
    // Função chamada ao clicar no botão buscar
    const buscar = () => {
        // Chama a função... envia a tag digitada, após remover espaços nas pontas
        onBuscar(tag.trim())
    }
    return(
        <View style={st.container}>
            <TextInput
            style={st.input}
            placeholder='Digite o assunto (react, javascript)'
            value='tag'
            onChangeText={setTag}
            autoCapitalize='none'
            autoCorrect={false} // Desativa correção automática
            />
            <Button title="Buscar" onPress={buscar}/>
        </View>
    )
}

const st = StyleSheet.create({
    container: {

    },
    input: {
        flex: 1,
        borderColor: '#007aff',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 10
    }
})