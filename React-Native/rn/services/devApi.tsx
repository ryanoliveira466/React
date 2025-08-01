// Definindo os tipos

export type Article = {
    id: number,
    title: string,
    url: string,
    reading_time_minutes: number,
    user:{
        name: string,
        profile_image: string
    }
    tag_list: string[]
}

// Função assíncrona que busca artigos na API Dev.to, filtrando por tag
export async function buscarArtigos(tag?: string): Promise<Article[]> {
    try {
        // Monta a URL da API para buscar artigos
        // Se recebe uma tag, inclui no filtro
        const url = tag ? `https://dev.to/api/articles?tag=${encodeURIComponent(tag)}&per_page=10` : `https://dev.to/api/articles?per_page=10` // Se não, busca os 10 artigos mais recentes

        // Faz a requesição HTTP para a API usando fetch
        const resposta = await fetch(url)
        // Se a resposta não for "ok" (status fora de 200-299), lança um erro
        if(!resposta.ok){
            throw new Error('Erro ao buscar artigos')
        }
        // Converte o corpo da resposta para JSON
        const dados: Article[] = await resposta.json()
        // Retorna os artigos obtidos
        return dados
    } 
    catch(erro){
        throw erro
    }
}