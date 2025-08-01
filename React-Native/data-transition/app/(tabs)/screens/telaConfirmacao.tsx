import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams } from "expo-router";

export default function telaConfirmacao() {
    const { nome, email } = useLocalSearchParams()

    const [endereco, setEndereco] = useState('');
    const [idade, setIdade] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>💠</Text>

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                editable={false}
            />

            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                editable={false}
            />

            <Text style={styles.label}>Endereço:</Text>
            <TextInput
                style={styles.input}
                value={endereco}
                onChangeText={setEndereco}
                placeholder="Digite seu endereço"
                placeholderTextColor="#aaa"
            />

            <Text style={styles.label}>Idade:</Text>
            <TextInput
                style={styles.input}
                value={idade}
                onChangeText={setIdade}
                placeholder="Digite sua idade"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
            />

            <Text style={styles.label}>CPF:</Text>
            <TextInput
                style={styles.input}
                value={cpf}
                onChangeText={setCpf}
                placeholder="Digite seu CPF"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
            />

            <View style={styles.buttonContainer}>
                <Button
                    title="Concluir e seguir"
                    onPress={() => {
                        if (!endereco.trim() || !idade.trim() || !cpf.trim()) {
                            Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
                            return;
                        }

                        Alert.alert(
                            "Dados cadastrados",
                            `Nome: ${nome}\nEmail: ${email}\nEndereço: ${endereco}\nIdade: ${idade}\nCPF: ${cpf}`
                        );
                    }}

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