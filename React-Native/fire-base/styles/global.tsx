import { StyleSheet } from "react-native";

export const global =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    title:{
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4
    }
})