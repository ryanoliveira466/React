import { useLocalSearchParams } from "expo-router";
import {View, Text, StyleSheet} from 'react-native';

export default function Perfil(){
    const { nome, idade, email} = useLocalSearchParams()

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Perfil</Text>
            <Text style={styles.titulo}> Nome: {nome} </Text>
            <Text style={styles.titulo}> Idade: {idade} </Text>
            <Text style={styles.titulo}> Email: {email} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8F5E9',
        flex: 1,
        padding: 24,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#1B5E20'
    },
    info: {
        fontSize: 18,
        marginBottom: 12,
        color: '#2E7D32'
    }
})