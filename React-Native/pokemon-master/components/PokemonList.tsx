// Importa React e os hooks useEffect e useState para controle de estado e efeitos colaterais
import React, { useEffect, useState } from 'react';

// Importa componentes da interface do React Native
import { FlatList, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

// Importa o componente que renderiza cada card de Pokémon
import PokemonCard from '../components/PokemonCard';

// Importa a função que faz a busca de Pokémons (serviço separado)
import { buscarPokemons } from '../services/pokeApi';

// Define o tipo dos dados que serão usados para representar um Pokémon
type Pokemon = {
  nome: string;    // Nome do Pokémon
  imagem: string;  // URL da imagem do Pokémon
  altura: number;
  peso: number;
};

// Componente funcional principal que exibe a lista de Pokémons
export default function PokemonList() {
  // Estado para armazenar a lista de Pokémons retornados da API
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // Estado booleano que indica se os dados ainda estão sendo carregados
  const [carregando, setCarregando] = useState<boolean>(true);

  // useEffect é chamado uma vez quando o componente é montado (como o componentDidMount)
  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const carregar = async () => {
      try {
        // Busca a lista de Pokémons (limitado a 10)
        const lista = await buscarPokemons(30);

        // Atualiza o estado com a lista retornada
        setPokemons(lista);
      } catch (e) {
        // Caso ocorra algum erro, exibe no console
        console.error('Erro ao carregar pokémons', e);
      } finally {
        // Finaliza o carregamento (independente de sucesso ou falha)
        setCarregando(false);
      }
    };

    // Chama a função de carregamento
    carregar();
  }, []); // Array vazio = executa apenas na primeira renderização

  // Enquanto os dados estão sendo carregados, exibe um indicador de progresso
  if (carregando) {
    return <ActivityIndicator size="large" color="#ff4444" />;
  }

  // Após o carregamento, renderiza a lista de Pokémons
  return (
    <FlatList
      data={pokemons}                                // Dados que serão exibidos na lista
      keyExtractor={(_, index) => index.toString()}  // Gera uma chave única para cada item
      renderItem={({ item }) => (                    // Função que renderiza cada item da lista
        <PokemonCard nome={item.nome} imagem={item.imagem} altura={item.altura} peso={item.peso} />
      )}
    />
  );
}
