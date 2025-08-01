import React, {useState} from "react";
import {View, Text, Button, StyleSheet} from 'react-native'
// Importa o módulo de localização da Expo, que permite acessar a geolocalização
import * as Location from 'expo-location'

// Componente principal do aplicativo
export default function BotaoLocalizacao(){
    // Estado para armazenar o objeto de localização (como não temos ainda, pode ser null inicialmente)
    const[location, setLocation] = useState<Location.LocationObject | null>(null)
    // Estado para armazenar mensagens de erro (caso a permissão for negada)
    const[errorMsg, setErrorMsg] = useState<string | null>(null)
    //Função chamada quando o usuário clica no botão "Obter localização"
    const handleGetLocation = async() => {
        // Solicitar a permissão ao usuário para acessar a localização
        const{ status } = await Location.requestForegroundPermissionsAsync()
        // Se a permissão for negada, atualiza o estado com a mensagem de erro e encerra a função
        if( status !== 'granted'){
            // Utilizamos granted como um string retornada quando o usuário interage com a permissão
            setErrorMsg('Permissão de localização negada')
            return
        }
        // Obtém a localização atual do dispositivo (latitude, longitude)
        const currentLocation = await Location.getCurrentPositionAsync({})
        // Atualiza o estado com a localização obtida
        setLocation(currentLocation)
    }
    // O que será exibido na tela
    return(
        <View style={styles.container}>
            <Text style={styles.container}>📍 Localização</Text>
            {/* Botão que, ao ser clicado, chama a função handleGetLocalization */}
            <Button title="Obter a localização agora? " onPress={handleGetLocation}></Button>
            {/* Se houver uma mensagem de erro, ela será exibida em vermelho */}
            {errorMsg && <Text style={styles.error}>{errorMsg}</Text>}
            {/* Se a localização estiver disponível,exibe a latitude e longitude */}
            { location && (
                <View style={styles.result}>
                    <Text> Latitude: {location.coords.latitude}</Text>
                    <Text> Longitude: {location.coords.longitude}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 80,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title:{
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    // Estilo para a mensagem de erro
    error:{
        marginTop: 10,
        color: 'red',
    },
    result:{
        marginTop: 20,
        alignItems: 'center'
    }
})