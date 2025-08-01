import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from "expo-router";

export default function telaFormulario() {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>😎</Text>

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome"
                placeholderTextColor="#aaa"
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu email"
                placeholderTextColor="#aaa"
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Enviar"
                    onPress={() => {
                        if (!nome.trim() || !email.trim()) {
                            Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
                            return;
                        }

                        router.push({
                            pathname: '/(tabs)/screens/telaConfirmacao',
                            params: { nome, email },
                        })
                    }
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    label: {
        marginBottom: 6,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        marginTop: 20,
    },
});
