import CartaoCredito from '@/components/Cartao'
import React from 'react'
import { ScrollView } from 'react-native'

export default function App(){
  return(
    <ScrollView style={{ width:'100%', marginTop:20}}
      contentContainerStyle={{display:'flex', justifyContent:'center', alignItems:'center' }}>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
      <CartaoCredito nome="Maria String" numero="*** *** *** 5687" validade="01/30" image={require('../../assets/images/cartao-credito-imagem.jpg')}/>
    </ScrollView>
  )
}