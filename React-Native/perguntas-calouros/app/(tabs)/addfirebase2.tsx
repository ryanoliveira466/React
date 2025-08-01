
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import { db } from "../../services/firebaseConfig2";
import { collection, addDoc } from "firebase/firestore";

const colors = {
  senacBlue: "#0055A4",
  senacOrange: "#FF6F00",
  background: "#F0F4F8",
  white: "#FFFFFF",
  textDark: "#222222",
  border: "#0055A4",
};


export default function AddCardScreen() {
  const [imagem, setImagem] = useState<string | null>(null);
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted" || cameraStatus !== "granted") {
        alert("Permissões para acessar câmera e galeria são necessárias.");
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const tirarFoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const salvar = async () => {
    try {
      await addDoc(collection(db, "experiencias"), {
        imagem,
        descricao,
        valor,
        criadoEm: new Date(),
      });
      Alert.alert("Sucesso", "Experiência salva com sucesso!");
      setImagem(null);
      setDescricao("");
      setValor("");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      Alert.alert("Erro", "Não foi possível salvar.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Imagem:</Text>
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={pickImage}>
          <Text style={styles.buttonText}>Escolher da Galeria</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={tirarFoto}>
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Escreva algo..."
        multiline
      />

      <Text style={styles.label}>Valor associado:</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder="Valor do Senac"
      />

      <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar Experiência</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "700",
    fontSize: 16,
    color: colors.senacBlue,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.senacBlue,
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: colors.textDark,
  },
  imagem: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  buttonPrimary: {
    backgroundColor: colors.senacBlue,
    marginTop: 30,
  },
  buttonSecondary: {
    backgroundColor: colors.senacOrange,
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 16,
  },
});
