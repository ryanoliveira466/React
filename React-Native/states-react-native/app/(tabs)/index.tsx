import React, { useState } from "react"
import { ScrollView, Text, Button, StyleSheet } from 'react-native'

import EstadoObjeto from "@/components/EstadocomObejto"
import MostrarOcultar from "../../components/MostrarOcultar"
import ClassificadorAnime from "@/components/ClassificaAnime"
import { UseEffectExample } from "../../hooks/useEffect"


export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <EstadoObjeto />
      <UseEffectExample/>

      <Text style={{ fontSize: 20 }}>
        Classificador de Anime:
      </Text>

      <ClassificadorAnime nome="One Piece"/>
      <MostrarOcultar>
      <Text style={styles.texto}>
        "One Piece é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido publicados na revista Weekly Shōnen Jump, tendo sua primeira publicação em 22 de julho de 1997, com os capítulos compilados e publicados em 111 volumes tankōbon pela editora Shueisha até março de 2025."
      </Text>
      </MostrarOcultar>




      <ClassificadorAnime nome="Naruto"/>
      <MostrarOcultar>
      <Text style={styles.texto}>
        "Naruto é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila"
      </Text>
      </MostrarOcultar>




      <ClassificadorAnime nome="Jujutsu Kaisen"/>
      <MostrarOcultar>
      <Text style={styles.texto}>
        "Jujutsu Kaisen é uma série de mangá japonesa escrita e ilustrada por Gege Akutami. Foi serializada na revista Weekly Shōnen Jump de março de 2018 a setembro de 2024, com seus capítulos compilados em 30 volumes tankōbon pela Shueisha. A série é licenciada e publicada no Brasil pela editora Panini."
      </Text>
      </MostrarOcultar>

      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccffcc",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  }

})
