import React from 'react'; 
// Importa o React, necessário para usar componentes funcionais.

import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
// Importa componentes do React Native para criar a interface: ScrollView, View, Text, etc.

import { useRouter, Link } from 'expo-router'; 
// Importa o hook `useRouter` e o componente `Link` do Expo Router, usados para navegação entre telas.

interface Category {
  name: string;
  image: string;
}
// Define um tipo `Category` com duas propriedades: `name` (nome da categoria) e `image` (URL da imagem).

const categories: Category[] = [
  { name: 'Pizza', image: 'https://receitatodahora.com.br/wp-content/uploads/2024/08/pizza-portuguesa-0508.jpg' },
  { name: 'Sushi', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/960px-Sushi_platter.jpg' },
  { name: 'Hambúrguer', image: 'https://receitas.wap.ind.br/wp-content/uploads/2024/03/Receita-de-hamburguer-na-air-fryer-1080x640.jpg' },
  { name: 'Chinesa', image: 'https://djapa.com.br/wp-content/uploads/2024/07/lamen.jpg' },
];
// Cria um array de objetos `categories`, com dados fictícios de 4 categorias e suas respectivas imagens.

const Categories: React.FC = () => {
// Define o componente funcional `Categories`.

  const router = useRouter(); 
  // Usa o hook `useRouter` do Expo Router para realizar navegações entre telas.

  const handleCategoryPress = (name: string) => {
  // Função chamada quando o usuário clica em uma categoria.

    if (name === 'Pizza') {
      router.push('/(tabs)/screens/pizza'); 
      // Se a categoria for "Pizza", navega para a tela da pizzaria usando a rota definida no projeto.
    }

    if (name === 'Sushi') {
      router.push('/(tabs)/screens/sushi'); 
    }

    if (name === 'Hambúrguer') {
      router.push('/(tabs)/screens/hamburguer'); 
      // Se a categoria for "Pizza", navega para a tela da pizzaria usando a rota definida no projeto.
    }

    if (name === 'Chinesa') {
      router.push('/(tabs)/screens/chinesa'); 
      // Se a categoria for "Pizza", navega para a tela da pizzaria usando a rota definida no projeto.
    }
  };

  return (
    <View style={styles.categories}>
    {/* Container principal com estilo personalizado */}

      <Text style={styles.title}>Categorias</Text>
      {/* Título da seção de categorias */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {/* Scroll horizontal que permite deslizar as categorias sem mostrar a barra de rolagem */}

        {categories.map((category, index) => (
        // Itera sobre cada item da lista `categories` e gera um botão clicável com imagem e nome.

          <TouchableOpacity
            key={index}
            style={styles.categoryCard}
            onPress={() => handleCategoryPress(category.name)}
          >
          {/* Cada categoria é clicável e dispara a função `handleCategoryPress` passando o nome da categoria */}

            <Image source={{ uri: category.image }} style={styles.categoryImage} />
            {/* Mostra a imagem da categoria carregando da URL */}

            <Text style={styles.categoryText}>{category.name}</Text>
            {/* Mostra o nome da categoria abaixo da imagem */}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Cria os estilos usando StyleSheet, que é a forma recomendada de estilizar no React Native

  categories: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  // Espaçamento vertical e horizontal para a seção de categorias

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Estilo do título "Categorias"

  categoryCard: {
    alignItems: 'center',
    marginRight: 15,
  },
  // Cada card de categoria tem itens centralizados e um espaço à direita

  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  // Imagem circular de 80x80 pixels

  categoryText: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  // Texto abaixo da imagem com estilo simples e legível
});

export default Categories; 
// Exporta o componente `Categories` para ser usado em outras partes da aplicação
