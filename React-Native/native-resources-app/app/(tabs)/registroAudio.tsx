import React, { JSX, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Audio } from 'expo-av'; // Importa o módulo de áudio do Expo
import { useRouter } from 'expo-router';

// Componente principal da tela
export default function RegistroAudio(): JSX.Element {
    const router = useRouter();
    // Estado para armazenar a instância da gravação
    const [recording, setRecording] = useState<Audio.Recording | null>(null);
    // Estado para armazenar a instância do som (reprodução)
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    // Estado para armazenar o caminho (URI) do áudio gravado
    const [audioUri, setAudioUri] = useState<string | null>(null);
    // Estado para indicar se a gravação está em andamento
    const [isRecording, setIsRecording] = useState<boolean>(false);
    // Estado para armazenar o conteúdo do TextArea
    const [observations, setObservations] = useState<string>('');

    // Efeito para descarregar o som da memória quando o componente for desmontado
    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync(); // Libera recursos usados pela reprodução de som
            }
        };
    }, [sound]);

    // Função para iniciar a gravação de áudio
    const startRecording = async () => {
        try {
            // Solicita permissão do usuário para usar o microfone
            const permission = await Audio.requestPermissionsAsync();

            // Se a permissão for negada, exibe alerta e para aqui
            if (permission.status !== 'granted') {
                Alert.alert('Permissão negada', 'É necessário permitir o uso do microfone.');
                return;
            }

            // Configura o modo de áudio para permitir gravação (principalmente no iOS)
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true, // Permite gravação no iOS
                playsInSilentModeIOS: true, // Permite reprodução no modo silencioso
            });

            // Cria uma nova gravação com configuração de alta qualidade
            const { recording } = await Audio.Recording.createAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );

            // Armazena a gravação no estado e marca que está gravando
            setRecording(recording);
            setIsRecording(true);
        } catch (error) {
            console.error('Erro ao iniciar gravação:', error);
        }
    };

    // Função para parar a gravação
    const stopRecording = async () => {
        try {
            if (!recording) return; // Se não há gravação ativa, sai da função

            await recording.stopAndUnloadAsync(); // Para a gravação e salva o áudio
            const uri = recording.getURI(); // Pega o URI do arquivo de áudio gerado

            // Salva o URI no estado e limpa a instância de gravação
            setAudioUri(uri);
            setRecording(null);
            setIsRecording(false);
        } catch (error) {
            console.error('Erro ao parar gravação:', error);
        }
    };

    // Função para reproduzir o áudio gravado
    const playSound = async () => {
        if (!audioUri) return; // Se não há áudio salvo, não faz nada

        try {
            // Cria uma instância de som a partir do arquivo gravado
            const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
            setSound(sound); // Salva a instância no estado
            await sound.playAsync(); // Inicia a reprodução
        } catch (error) {
            console.error('Erro ao reproduzir áudio:', error);
        }
    };

    // Função para finalizar o registro
    const completeRegistration = () => {
        Alert.alert('Registro Completo', 'O registro foi finalizado com sucesso!');
        // Aqui você pode adicionar a lógica para salvar ou enviar os dados do registro
    };

    // Retorno JSX: interface da tela
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎙️ Gravação de Áudio</Text>

            {/* Botão que muda de função com base no estado de gravação */}
            <TouchableOpacity
                style={[styles.button, isRecording && styles.recordingButton]}
                onPress={isRecording ? stopRecording : startRecording}
            >
                <Text style={styles.buttonText}>
                    {isRecording ? 'Parar Gravação' : 'Iniciar Gravação'}
                </Text>
            </TouchableOpacity>

            {/* Exibe botão de reprodução somente se houver áudio gravado */}
            {audioUri && (
                <View style={styles.playButton}>
                    <TouchableOpacity style={styles.button} onPress={playSound}>
                        <Text style={styles.buttonText}>▶️ Reproduzir Áudio</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Campo de texto para Observações Adicionais */}
            <Text style={styles.label}>Observações Adicionais</Text>
            <TextInput
                style={styles.textArea}
                multiline
                numberOfLines={4}
                value={observations}
                onChangeText={setObservations}
                placeholder="Digite observações adicionais..."
            />

            {/* Botão para Completar o Registro */}
            <TouchableOpacity style={styles.completeButton} onPress={completeRegistration}>
                <Text style={styles.buttonText}>Completar Registro</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilização da interface
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda a tela
        padding: 24,
        alignItems: 'center', // Alinha horizontalmente ao centro
        justifyContent: 'center', // Alinha verticalmente ao centro
        backgroundColor: '#e6f5ea', // Cor suave de fundo
    },
    title: {
        fontSize: 22,
        marginBottom: 24,
        fontWeight: 'bold',
        color: '#388e3c', // Cor verde
    },
    button: {
        backgroundColor: '#4caf50',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 20,
        elevation: 3,
    },
    recordingButton: {
        backgroundColor: '#d32f2f', // Cor vermelha enquanto grava
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    playButton: {
        marginTop: 20,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: 5,
        marginTop: 20,
    },
    textArea: {
        width: '100%',
        height: 120,
        borderColor: '#a5d6a7',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        backgroundColor: '#ffffff',
        marginBottom: 20,
        textAlignVertical: 'top',
    },
    completeButton: {
        backgroundColor: '#388e3c',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
});

