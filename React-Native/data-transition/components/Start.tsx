import React from "react";
import { Button, Text, View } from 'react-native';
import { useRouter } from "expo-router";

export default function Star() {
    const router = useRouter();

    return (
        <View>
            <Text>Olá 👋, Bem vindo ao Cadastro de Usuários</Text>
            <Button
                title="Iniciar Cadastro"
                onPress={() =>
                    router.push({
                        pathname: '/(tabs)/screens/telaFormulario',
                    })
                }></Button>
        </View>
    )
}