// Importa a biblioteca principal do React
import React from "react";

//Importa os componentes necessários da blibioteca react-native
//Agora estamos usando 'View' e 'Text'
import { View } from 'react-native'
import { Text } from 'react-native'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'

//Define o componente principal do app, com a função App
export default function App() {
  return (
    //View é um container genérico, como se fosse uma <div> no HTML
    <View style={{ padding: 100, backgroundColor: '#6fc1ed' }}>
      <Text style={{ fontSize: 20 }}>
        Olá mundo! Bem-vindo ao App da 232N
      </Text>
      <Image source={{ uri: 'https://images.wallpapersden.com/image/download/tree-alone-dark-evening-4k_bWZpam2UmZqaraWkpJRobWllrWdma2U.jpg' }}
        style={{ width: 100, height: 100 }} />
      <Image source={require('../../assets/images/like.png')}
        style={{ width: 100, height: 100 }} />

      <View style={{ height: 250, borderWidth: 1, borderColor: '#333', borderRadius: 8, padding: 10 }}>
        <ScrollView>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
          <Text>💎 Teste de scroll</Text>
        </ScrollView>
      </View>

    </View>

  );
}
