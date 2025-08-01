import React from "react";
import { useEffect, useRef } from "react";
import {Animated, StyleSheet} from 'react-native'


export default function SpinningIcon(){
    const loop = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.loop(
            Animated.timing(loop, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true 
            })
        ).start()
    }, [])
    const rotateInterpole = loop.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })
    return(
        <Animated.Image
         source={{
            uri: 'https://img.freepik.com/psd-gratuitas/um-prato-de-frango-assado-e-um-banquete-delicioso_632498-25445.jpg?semt=ais_hybrid&w=740'
         }}
         style={[
            styles.icon,
            { transform: [{ rotate: rotateInterpole }]}
        ]}
         />
        
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 80,
        marginBottom: 30,
    }
})