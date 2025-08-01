import React, {useState} from "react"
import {View, Text, Button, TextInput } from 'react-native'

export default function EstadoObjeto(){
    //Estado com um objeto e duas propriedades
    const [usuario, setUsuario] = useState({nome: 'Maria', idade:20})
    return(
        <View>
            <Text>Nome: {usuario.nome}</Text>
            <Text>idade: {usuario.idade}</Text>
            <Button title="Estado mudando com a Maria fazendo aniversário clicando no botão" onPress={() => setUsuario({...usuario, idade: usuario.idade + 1})}></Button>
            <TextInput onChangeText={(text) => setUsuario({...usuario, nome: text })}>{usuario.nome}</TextInput>
        </View>
    )
}
