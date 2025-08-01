import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import BotaoGaleria from '@/components/BotaoGaleria';

const RegistroEspecie = () => {
    const [nomeEspecie, setNomeEspecie] = useState('');
    const router = useRouter();

    return (
        <View style={styles.container}>
            <BotaoGaleria></BotaoGaleria>

            {/* Campo de input para Nome da Espécie */}
            <Text style={styles.label}>Nome da Espécie</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome da espécie"
                value={nomeEspecie}
                onChangeText={setNomeEspecie}
            />

            {/* Botão para Informações adicionais */}
            <TouchableOpacity onPress={() => router.push('/(tabs)/registroAudio')} style={styles.infoButton}>
                <Text style={styles.buttonText}>Informações Adicionais</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f5ea',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectImageButton: {
        backgroundColor: '#4caf50',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginBottom: 20,
    },
    infoButton: {
        backgroundColor: '#388e3c',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        width: '100%',
        height: 45,
        borderColor: '#a5d6a7',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#ffffff',
        marginBottom: 20,
    },
});

export default RegistroEspecie;