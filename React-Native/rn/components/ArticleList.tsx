import React, { useEffect, useState } from 'react'
import { FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native'
import ArticleCard from './ArticleCard'
import { buscarArtigos } from '@/services/devApi'

// Definindo o tipo ou a interface do objeto artigo
type Article = {
    id: number,
    title: string,
    url: string,
    reading_time_minutes: number,
    user: {
        name: string,
        profile_image: string
    }
    tag_list: string[]
}

// Define o tipo das props recebidas pelo componente ArticleList
type Props = { filtroTag: string }

export default function ArticleList({ filtroTag }: Props) {
    // Estado que guarda os artigos retornados da API, iniciolizado com uma array vazia
    const [articles, setArticles] = useState<Article[]>([])
    // Estado que indica se a requesição está carregando
    const [carregando, setCarregando] = useState(true)
    // Estado para armazenar mensagem de erro
    const [erro, setErro] = useState('')
    // Hook que executa toda vez que a prop filtroTag muda( no caso, quando o usuário busca um tema)
    useEffect(() => {
        setCarregando(true) // Começa o indicador de carregamento
        setErro('') // Limpa erros anteriores
        // Chama a função buscarArtigos passando o filtro da Tag recebido
        buscarArtigos(filtroTag)
            .then(setArticles) // Se der certo, atualiza o estado com a lista de artigos
            .catch(() => setErro('Erro ao carregar artigos')) // Se der erro, seta a mensagem
            .finally(() => setCarregando(false)) // Para indicador de carregamento, de sucesso ou erro
    }, [filtroTag])

    // Se estiver carregando, exibe o spinner de carregamento
    if (carregando)
        return <ActivityIndicator style={{ marginTop: 20}} size={'large'} color={"#007aff"} />
        if(erro)
            return <Text style={st.erro}>{erro}</Text>
    // Se não carrega nenhum artigo, avisa o usuário
    if(!articles.length)
        return <Text style={st.semResultados}>Nenhum artigo encontrado</Text>
    // Depois se passou por todos os casos acima, renderiza a lista de artigos
    return(
        <FlatList
        data={articles}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ArticleCard article={item} />}
        contentContainerStyle={{ paddingBottom: 30}}
        />
    )        

}

const st = StyleSheet.create({
    erro: {
        textAlign: 'center',
        color: 'red',
        marginTop: 20,
        fontSize: 16
    },
    semResultados: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#555'
    }
})