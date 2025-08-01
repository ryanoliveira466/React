import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type Props = {
    children: React.ReactNode
}

export default function MostrarOcultar({ children }: Props){
    const [visivel, setVisivel] = useState(false)
    return(
        <View style={styles.container}>
            <Button
            title={visivel? 'Oculta conteúdo': 'Mostra conteúdo'}
            onPress={() => setVisivel(!visivel)}
            />
            {visivel && (
                <Text style={{marginTop: 10}}>
                   { children }
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        padding: 10,
        borderWidth:1,
        borderColor: "#f44336",
        borderRadius: 8
    },
    conteudo: {
        marginTop: 10,
    }
})