import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebaseConfig2";

type Pergunta = {
  id: string;
  pergunta: string;
  resposta: string;
};

export default function PerguntasScreen() {
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [faq, setFaq] = useState<Pergunta[]>([]);

  useEffect(() => {
    const q = query(collection(db, "perguntas_respostas"), orderBy("criadoEm", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dados: Pergunta[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        pergunta: doc.data().pergunta,
        resposta: doc.data().resposta,
      }));
      setFaq(dados);
    });
    return () => unsubscribe();
  }, []);

  const adicionarPergunta = async () => {
    if (!pergunta.trim() || !resposta.trim()) {
      Alert.alert("Erro", "Por favor, preencha pergunta e resposta.");
      return;
    }
    try {
      await addDoc(collection(db, "perguntas_respostas"), {
        pergunta: pergunta.trim(),
        resposta: resposta.trim(),
        criadoEm: new Date(),
      });
      setPergunta("");
      setResposta("");
      Alert.alert("Sucesso", "Pergunta adicionada!");
    } catch (error) {
      console.error("Erro ao salvar pergunta:", error);
      Alert.alert("Erro", "Não foi possível salvar a pergunta.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Text style={styles.titulo}>Adicione sua Pergunta e Resposta</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite a pergunta"
        value={pergunta}
        onChangeText={setPergunta}
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Digite a resposta"
        multiline
        value={resposta}
        onChangeText={setResposta}
      />

      <Button title="Adicionar" onPress={adicionarPergunta} color="#0055A4" />

      <Text style={[styles.titulo, { marginTop: 30 }]}>Perguntas e Respostas</Text>

      <FlatList
        data={faq}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.pergunta}>❓ {item.pergunta}</Text>
            <Text style={styles.resposta}>💬 {item.resposta}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ marginTop: 20, textAlign: "center" }}>Nenhuma pergunta adicionada ainda.</Text>}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#0055A4" },
  input: {
    borderWidth: 1,
    borderColor: "#0055A4",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: "#222",
  },
  card: {
    backgroundColor: "#E6F2FF",
    padding: 14,
    borderRadius: 10,
    marginVertical: 8,
  },
  pergunta: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#003366",
  },
  resposta: {
    marginTop: 6,
    fontSize: 15,
    color: "#222",
  },
});
