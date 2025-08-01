import React, {useState} from "react";
import {View, Button, Text, StyleSheet} from 'react-native'

//Importando os componentes criados
import Input from '@/components/Input'
// Importa o objeto auth da configuração do Firebase para autenticação
import {auth} from '../../services/firebase'
// Importa as funções para o login e cadastro de usuário do Firebase Authentication
import { signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
// Importando o roteador do Expo router para a navegação entre telas
import { router } from 'expo-router'
export default function LoginScreen(){
  // Estado para armazenar o email digitado pelo usuário
  const[email, setEmail] = useState('')
  // Estado para armazenar a senha digitada pelo usuário
  const[senha, setSenha] = useState('')
  // Função que será chamada ao clicar no botão Entrar
  const login = () => {
    // Tentando autenticar o usuário no Firebase com email e senha informados
    signInWithEmailAndPassword(auth,email,senha)
    // Se o login for bem sucedido, substitui a tela atual pela 'home
    .then(() => router.replace('/(tabs)/Home'))
    // Se ocorrer erro, exibe um alerta para o usuário verificar os dados
    .catch(() => alert('Erro ao entrar. Verifique seus dados'))
  }
  // Função que será chamada ao clicar no botão 'Cadastrar'
  const singup =  () => {
    // Tenta criar um novo usuário no Firebase com email e senha informados
    createUserWithEmailAndPassword(auth, email, senha)
    // Se o cadastro for bem sucedido, mostra um alert de sucesso
    .then(() => ('Usuário cadastrado com sucesso!'))
    // Se ocorrer erro, mostra um alerta para verificar os dados
    .catch(() => alert('Erro ao cadastrar. Verifique so dados'))
  }
  return(
    // Container principal de tela
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Email:</Text>
      <Input
      placeholder="Digite seu email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize="none"
      />
      <Text style={styles.label}> Senha:</Text>
      <Input
      placeholder="Digite seu senha"
      value={senha}
      onChangeText={setSenha}
      secureTextEntry // Esconde o texto digitado (***) para segurança
      />
      <View style={styles.buttonContainer}>
        <Button
        title="Entrar"
        onPress={login}
        color={"#1e40af"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
        title="Cadastrar" 
        onPress={singup} 
        color="#2563eb"/>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 40,
    color: '#1e3a8a',
    textAlign: 'center'
  },
  label: {
    fontWeight: '600',
    fontSize: 10,
    marginBottom: 6,
    color: '#1e40af'
  },
  buttonContainer: {
    marginTop: 15,

  }

})