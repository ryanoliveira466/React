// Função assíncrona que busca uma lista de Pokémons da API
export async function buscarPokemons(limite: number = 30) {
  // Faz uma requisição HTTP para a PokeAPI buscando uma lista limitada de pokémons
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limite}`);

  // Converte a resposta da requisição para JSON
  const dados = await resposta.json();

  // Para cada Pokémon da lista básica, busca os detalhes individuais com nome e imagem
  const detalhes = await Promise.all(
    // Mapeia o array de resultados (cada item tem name e url)
    dados.results.map(async (pokemon: { name: string; url: string }) => {
      // Faz nova requisição para obter os detalhes de cada Pokémon individual
      const res = await fetch(pokemon.url);

      // Converte os detalhes em JSON
      const detalhesPokemon = await res.json();

      // Retorna um objeto contendo apenas o nome e a imagem (sprite frontal)
      return {
        nome: detalhesPokemon.name,                       // Nome do Pokémon
        imagem: detalhesPokemon.sprites.front_default,    // URL da imagem do sprite frontal
        altura: detalhesPokemon.height,
        peso: detalhesPokemon.weight
      };
    })
  );

  // Retorna o array final com os dados de cada Pokémon já prontos para exibição
  return detalhes;
}
