import React, {useState} from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import SearchTag from "@/components/SearchTag";
import ArticleList from "@/components/ArticleList";

export default function App(){
  // Estado local que guarda a tag de busca digitada
  const [tag, setTag] = useState('')
  return(
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor={'#f0f4f8'} />
    <SafeAreaView style={st.safe}>
      <Text style={st.titulo}> Leitura Dev 😎</Text>
      <SearchTag onBuscar={setTag} />
      <ArticleList filtroTag={tag} />
    </SafeAreaView>
    </>
  )
}

const st = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 16,
    paddingTop: 20
  },
  titulo:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 16,
    textAlign: 'center'
  }
})