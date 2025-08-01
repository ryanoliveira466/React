import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

interface Item {
  pergunta: string;
  resposta: string;
}

export default function PerguntasRespostas() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [itens, setItens] = useState<Item[]>([]);

  const adicionar = () => {
    if (pergunta && resposta) {
      setItens(prev => [...prev, { pergunta, resposta }]);
      setPergunta('');
      setResposta('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <Text style={styles.titulo}>Perguntas Frequentes</Text>

      <TextInput
        placeholder="Digite a pergunta"
        value={pergunta}
        onChangeText={setPergunta}
        style={styles.input}
      />
      <TextInput
        placeholder="Digite a resposta"
        value={resposta}
        onChangeText={setResposta}
        style={styles.input}
      />

      <Button title="Adicionar" onPress={adicionar} color="#0E4C92" />

      <FlatList
        data={itens}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.pergunta}>• {item.pergunta}</Text>
            <Text style={styles.resposta}>Resposta: {item.resposta}</Text>
          </View>
        )}
        style={styles.lista}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  lista: { marginTop: 16 },
  item: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
  },
  pergunta: { fontWeight: 'bold' },
  resposta: { marginTop: 4 }
});
