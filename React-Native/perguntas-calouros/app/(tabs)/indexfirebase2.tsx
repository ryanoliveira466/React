// Tela inicial que lista os cards de experiências salvos no Firebase
import { useEffect, useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { db } from '../../services/firebaseConfig2';
import { collection, onSnapshot } from 'firebase/firestore';
import CardItem from '../../components/CardItemfirebase2';

export default function HomeScreen() {
  const [cards, setCards] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'experiencias'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCards(data);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Nova Experiência" onPress={() => router.push('/(tabs)/addfirebase2')} />
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 }
});
