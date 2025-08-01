import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import ImagemDefaultUser from "./ImageDefaultUser";

const BotaoCamera: React.FC = () => {
    const [imagem, setImage] = useState<string | null>(null)
    // Solicitando parmissão para usar a câmera quando o componente é montado
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert('Permissão negada', 'Você precisa permitir acesso à câmera')
            }
        })()
    }, [])
    // Função que é chamada ao clicar no botão
    const tirarFoto = async () => {
        const resultado = await ImagePicker.launchCameraAsync({
            allowsEditing: true, // Permite recorte após tirar a foto
            aspect: [1, 1], // Proporção da imagem (quadrada)
            quality: 1, // Qualidade máxima
        })
        // Se o usuário não cancelar, atualize o estado com a URI da imagem
        if (!resultado.canceled) {
            setImage(resultado.assets[0].uri)
        }
    }
    return (
        <View style={styles.container}>
                {imagem && (
                <Image
                    source={{ uri: imagem }}
                    style={styles.imagem}
                />
            )}
               {imagem == null && (
                <ImagemDefaultUser></ImagemDefaultUser>
            )}
            <TouchableOpacity style={styles.cameraButton} onPress={tirarFoto}>
                <Text style={styles.cameraButtonText}>Tirar Foto</Text>
            </TouchableOpacity>
        </View>
    )
}
export default BotaoCamera
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 40,
    },
    imagem: {
        width: 200,
        height: 200,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 100, // Imagem redonda
        borderWidth: 1,
        borderColor: '#a5d6a7'
    },
    cameraButton: {
        backgroundColor: '#4caf50',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginBottom: 25,
      },
      cameraButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },

})