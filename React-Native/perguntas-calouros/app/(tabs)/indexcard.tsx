import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const colors = {
  primary: '#0055A4',    // Azul SENAC
  secondary: '#FF6F00',  // Laranja SENAC
  background: '#FFFFFF', // Branco
  textDark: '#222222',
  textLight: '#FFFFFF',
};

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View entering={FadeInDown.duration(1500)} style={styles.content}>
        <Text style={styles.appName}>Memórias Senac</Text>
        <Text style={styles.title}>Bem-vindo!</Text>

        <Text style={styles.inspiration}>
          Chegamos ao final dessa jornada incrível.{"\n"}
          Cada experiência compartilhada, cada desafio superado,{"\n"}
          deixou lembranças que vão muito além das salas de aula.{"\n"}
          Vocês são a prova viva de dedicação, talento e futuro brilhante!{"\n"}
          Vamos continuar aprendendo e crescendo, juntos!
        </Text>

        <Link href="/addfirebase2" asChild>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText}>Adicionar nova experiência</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 480,
    alignItems: 'center',
  },
  appName: {
    fontSize: 36,
    fontWeight: '900',
    color: colors.secondary,
    marginBottom: 10,
    letterSpacing: 2,
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
    marginBottom: 45,
    lineHeight: 28,
    fontStyle: 'italic',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: '700',
    fontSize: 18,
  },
});
