
import { View, Text, StyleSheet } from 'react-native';

export default function SushiPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à página de Sushi!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffff"
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
