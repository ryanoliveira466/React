import React from "react";
import { useRef } from "react";
import { useRouter } from 'expo-router';
import { Animated, Pressable, Text, StyleSheet } from 'react-native'

export default function PulsatingButton(){
    const router = useRouter();
    const goToPlan = () => {
      router.push('/(tabs)/screens/Prices');
    }

    const scale = useRef(new Animated.Value(1)).current
    const buttonAnimation = () => {
        Animated.sequence([
            Animated.timing(scale, {
                toValue: 1.2,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(scale, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            })
        ]).start()


    }
    return(
        <Animated.View style={{ transform: [{scale}]}}>
            <Pressable onPress={buttonAnimation} onPressOut={goToPlan} style={styles.button}>
                <Text style={styles.textButton}>🥪</Text>
            </Pressable>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#388e3c',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 12,
    },
    textButton:{
        color: '#fff',
        fontSize: 48,
        fontWeight: 'bold'
    }
})