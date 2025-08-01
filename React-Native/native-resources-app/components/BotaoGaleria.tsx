// Importa os hooks e componentes do React Native
import React, { useState } from 'react';
import { Text, Image, StyleSheet, View, Alert, TouchableOpacity } from 'react-native';

// Importa o módulo de seleção de imagem do Expo
import * as ImagePicker from 'expo-image-picker';
import ImagemDefaultSpecie from './ImageDefaultSpecie';

// Componente principal do aplicativo
export default function BotaoGaleria() {
    // Estado para armazenar a URI da imagem selecionada
    const [imageUri, setImageUri] = useState<string | null>(null);

    // Função chamada quando o botão é pressionado
    const pickImage = async () => {
        // Solicita permissão do usuário para acessar a galeria
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        // Se a permissão não for concedida, exibe um alerta e retorna
        if (status !== 'granted') {
            Alert.alert('Permissão negada', 'Você precisa permitir acesso à galeria.');
            return;
        }

        // Abre a galeria para o usuário escolher uma imagem
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, // Apenas imagens
            quality: 1, // Qualidade máxima da imagem
        });

        // Se o usuário selecionou uma imagem (não cancelou)
        if (!result.canceled) {
            // Atualiza o estado com a URI da imagem escolhida
            setImageUri(result.assets[0].uri);
        }
    };

    // JSX que representa a interface do aplicativo
    return (
        <View style={styles.container}>

            {/* Se uma imagem foi selecionada, exibe ela */}
            {imageUri && (
                <Image
                    source={{ uri: imageUri }} // URI da imagem vinda da galeria
                    style={styles.image} // Estilo da imagem
                />
            )}

            {/* Se uma imagem foi selecionada, exibe ela */}
            {imageUri == null &&(
                <ImagemDefaultSpecie></ImagemDefaultSpecie>
            )}

            {/* Botão que chama a função pickImage */}
            <TouchableOpacity style={styles.cameraButton} onPress={pickImage}>
                <Text style={styles.cameraButtonText}>Selecionar Imagem</Text>
            </TouchableOpacity>
      
        </View>
    );
}

// Estilos para os componentes da interface
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 40,
    },
    image: {
        marginTop: 20, // Espaço acima da imagem
        marginBottom: 20,
        width: 300, // Largura da imagem
        height: 300, // Altura da imagem
        resizeMode: 'cover', // Cobre todo o espaço mantendo a proporção
        borderRadius: 10, // Bordas arredondadas
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
});