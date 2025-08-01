// Importa hooks e componentes necessários do React Native e Expo
import { useState, useEffect } from "react"; // useState para controlar estados e useEffect para efeitos colaterais
import { Link } from "expo-router"; // Navegação entre telas com Expo Router
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Alert,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // Biblioteca para acessar a câmera ou galeria de imagens

// Paleta de cores personalizada para o app
const colors = {
  primary: '#0055A4',     // Azul principal
  secondary: '#FF6F00',   // Laranja secundário
  background: '#FFFFFF',  // Cor de fundo branca
  textDark: '#222222',    // Texto escuro
  textLight: '#FFFFFF',   // Texto claro (usado em botões coloridos)
};

// Função principal do componente da tela inicial
export default function HomeScreen() {
  // Estados para armazenar a imagem (avatar), nome, turma e data
  const [avatar, setAvatar] = useState<string | null>(null); // Armazena o URI da foto
  const [nome, setNome] = useState(""); // Nome do aluno
  const [turma, setTurma] = useState(""); // Turma do aluno
  const [conclusao, setConclusao] = useState(""); // Data de conclusão

  // Solicita permissão da câmera ao iniciar o app (exceto no navegador)
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") { // Verifica se não está rodando no navegador
        const { status } = await ImagePicker.requestCameraPermissionsAsync(); // Solicita permissão
        if (status !== "granted") {
          Alert.alert("Permissão necessária", "Precisamos de permissão para usar a câmera.");
        }
      }
    })();
  }, []);

  // Função para tirar a foto com a câmera
  const tirarFoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 0.7, // Qualidade da imagem
      allowsEditing: true, // Permite cortar/editar
      aspect: [1, 1], // Formato quadrado (1:1)
    });
    if (!result.canceled) {
      setAvatar(result.assets[0].uri); // Salva o caminho da imagem
    }
  };

  // Retorno do layout da tela
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Bem-vindo ao Memórias Senac!</Text>
      
      <Text style={styles.inspiration}>
        Chegamos ao final dessa jornada incrível.{"\n"}
        Cada experiência compartilhada, cada desafio superado,{"\n"}
        deixou lembranças que vão muito além das salas de aula.{"\n"}
        Vamos continuar aprendendo e crescendo, juntos!
      </Text>

      {/* Área do avatar - se já tirou a foto, mostra a imagem, senão, mostra o texto */}
      <TouchableOpacity style={styles.avatarContainer} onPress={tirarFoto}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <Text style={styles.avatarPlaceholder}>Toque para tirar foto</Text>
        )}
      </TouchableOpacity>

      {/* Campos de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words" // Primeira letra de cada palavra em maiúsculo
      />
      <TextInput
        style={styles.input}
        placeholder="Sua turma"
        value={turma}
        onChangeText={setTurma}
        autoCapitalize="characters" // Todas as letras maiúsculas
      />
      <TextInput
        style={styles.input}
        placeholder="Dia da conclusão (ex: 12/07/2025)"
        value={conclusao}
        onChangeText={setConclusao}
        keyboardType="numeric" // Teclado numérico
      />

      {/* Botão para adicionar nova experiência - desabilitado se campos estiverem vazios */}
      <Link href="/addfirebase2" asChild>
        <TouchableOpacity style={styles.buttonPrimary} disabled={!nome || !turma || !conclusao || !avatar}>
          <Text style={styles.buttonText}>Adicionar nova experiência</Text>
        </TouchableOpacity>
      </Link>

      {/* Botão para ir à tela de perguntas */}
      <Link href="/perguntas" asChild>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Ver perguntas e respostas</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Faz o ScrollView ocupar o máximo de espaço
    padding: 30, // Espaço interno
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 25,
    textAlign: 'center',
  },
  inspiration: {
    fontSize: 18,
    color: colors.textDark,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 28,
    fontStyle: 'italic',
  },
  avatarContainer: {
    width: 140,
    height: 140,
    borderRadius: 70, // Deixa redondo
    backgroundColor: '#ddd', // Cor de fundo cinza claro
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    overflow: 'hidden', // Esconde o que estiver fora do círculo
  },
  avatarPlaceholder: {
    color: '#666', // Cinza escuro para o texto
    textAlign: 'center',
  },
  avatar: {
    width: '100%', // Imagem ocupa toda a área
    height: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
    color: colors.textDark,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    opacity: 1,
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
});
