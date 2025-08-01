import React from "react";
import {View, Text, StyleSheet, Image, Pressable, Linking} from 'react-native'

type Props ={
    article: {
        title: string,
        url: string,
        reading_time_minutes: number,
        user: {
            name: string,
            profile_image: string
        }
        tag_list: string[]
    }
}

export default function ArticleCard({ article }: Props){
    //Função para abrir o link do artigo
    const abrir = () => Linking.openURL(article.url)
    return(
        //Pressable torna o card clicável, disparando a função abrir()
        <Pressable onPress={abrir} style={st.card}>
        <Image source={{uri: article.user.profile_image}} style={st.avatar}></Image>
        <View style={st.info}>
            <Text style={st.title}>{article.title}</Text>
            <Text style={st.meta}>{article.user.name} {article.reading_time_minutes} min</Text>
            <Text style={st.tags}>{article.tag_list.map(tag => `#${tag}`).join(' ')} {article.reading_time_minutes} min</Text>
        </View>
        </Pressable>
    )
}

const st = StyleSheet.create({
    card:{
        flexDirection: 'row',
        padding: 14,
        marginBottom: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 0},
        elevation: 3,
        alignItems: 'center'
    },
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    info:{
        flex: 1,
        marginLeft: 14,
    },
    title:{
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 6,
        color: '#222'
    },
    meta:{
        fontSize: 13,
        color: '#555'
    },
    tags:{
        fontSize: 13,
        color: '#007aff',
        marginTop: 6,
    }
})