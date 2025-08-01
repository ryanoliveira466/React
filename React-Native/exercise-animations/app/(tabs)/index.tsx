import React from "react";
import { StyleSheet, View} from 'react-native'
import FromRight from "@/components/FromRight";
import FromLeft from "@/components/FromLeft";
import SpinningIcon from "@/components/SpinningIcon";
import PulsatingButton from "@/components/PulsatingButton";

export default function App() {
  return (
    <View style={styles.container}>
      <FromRight></FromRight>
      <FromLeft></FromLeft>
      <SpinningIcon></SpinningIcon>

      <PulsatingButton></PulsatingButton>     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'
  }
})

