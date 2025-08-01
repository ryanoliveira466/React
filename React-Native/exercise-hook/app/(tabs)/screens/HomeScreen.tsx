
import {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useRouter} from "expo-router";


export default function HomeScreen(){
  const router = useRouter();
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário </Text>
      <Text style={styles.label}>Nome: </Text>

      <TextInput 
      style={styles.input}
      value={nome}
      onChangeText={setNome}
      placeholder="Digite seu nome"
      placeholderTextColor="#aaa" 
      ></TextInput>

      <Text style={styles.label}>Idade: </Text>

      <TextInput style={styles.input}
      value={idade}
      onChangeText={setIdade}
      placeholder="Digite sua idade"
      keyboardType="numeric"
      placeholderTextColor="#aaa"
      ></TextInput>

      <Text style={styles.label}>Email: </Text>
      <TextInput 
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      placeholder="Digite seu email"
      placeholderTextColor="#aaa"
      >
      </TextInput>

      <View style={styles.botao}>
        <Button
        title="Enviar"
        color="#4CAF50"
        onPress={() =>
          router.push({
            pathname:'/(tabs)/screens/perfil',
            params: {nome, idade, email},
          })
        }
        >

        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "skyblue",
    width: "auto",
    paddingTop: 24,
  
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#2E7D32',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#2E7D32'
  },
  input: {
    borderWidth: 1,
    borderColor: '#A5D6A7',
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    color: '#333',
  },
  botao: {
    marginTop: 16,
  }
})