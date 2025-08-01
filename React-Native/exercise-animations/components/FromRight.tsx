import React from "react";
import { useEffect, useRef } from "react";
import { Animated, Text, StyleSheet } from 'react-native'

export default function FromRight() {
    const fade = useRef(new Animated.Value(0)).current
    const moveX = useRef(new Animated.Value(-200)).current

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fade, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(moveX, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }),
        ]).start()
    }, [])
    return (
        <Animated.View style={[
            styles.box,
            {
                opacity: fade,
                transform: [{ translateX: moveX }]
            }
        ]}
        >
            <Text style={styles.title}>Vindo da direita ➡️</Text>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'skyblue',
        padding: 20,
        borderRadius: 12,
        marginBottom: 30,
        elevation: 3
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4b394f',
        textAlign: 'center'
    }
})