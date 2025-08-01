// CardItemPergunta.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function CardItemPergunta({ data }: { data: { pergunta: string; resposta: string } }) {
  return (
    <View style={styles.card}>
      <Text style={styles.pergunta}>❓ {data.pergunta}</Text>
      <Text style={styles.resposta}>💬 {data.resposta}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e3fcef',
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
  },
  pergunta: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  resposta: {
    fontSize: 15,
  },
});
