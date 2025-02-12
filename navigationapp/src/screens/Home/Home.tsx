import { StyleSheet, Text, View } from 'react-native';
import Saudacao from './Saudacao/';
import { useState } from 'react';
import Cartao from './Cartao';

export default function Home() {
  const [nameUser, getNameUser] = useState("Davi");
  return (
    <View style={{backgroundColor: '#fff'}}>
      <Saudacao nomeUsuario={nameUser} />
      <Cartao />
    </View>
  );
}

