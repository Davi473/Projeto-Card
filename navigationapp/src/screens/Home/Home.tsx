import {View, ScrollView, Text } from 'react-native';
import Saudacao from './Saudacao/';
import { useState } from 'react';
import Cartao from './Cartao';
import ValoresTotal from './ValoresTotal/Index';

const lancamentos = [{
  id: '1',
  name: 'Lançamento de Janeiro',
  icone: '📅',  // Pode ser um ícone de sua escolha
  valor: '1500.00',
  data: '2025-01-10',
  compras: [
    { id: '1', name: 'Compra 1', valor: '500.00', data: '2025-01-05' },
    { id: '2', name: 'Compra 2', valor: '700.00', data: '2025-01-06' },
    { id: '3', name: 'Compra 3', valor: '300.00', data: '2025-01-07' },
  ],
}, 
{
  id: '1',
  name: 'Lançamento de Janeiro',
  icone: '📅',  // Pode ser um ícone de sua escolha
  valor: '1500.00',
  data: '2025-01-10',
  compras: [
    { id: '1', name: 'Compra 1', valor: '500.00', data: '2025-01-05' },
    { id: '2', name: 'Compra 2', valor: '700.00', data: '2025-01-06' },
    { id: '3', name: 'Compra 3', valor: '300.00', data: '2025-01-07' },
  ],
}
];

export default function Home() {
  const [nameUser, setNameUser] = useState("Davi");
  return (
  <ScrollView>
    <View style={{backgroundColor: '#fff'}}>
      <Saudacao nomeUsuario={nameUser} />
      <ValoresTotal entrada={1230} saida={1000} />
      <View>
        {lancamentos.map(lancamento => (
          <Cartao key={lancamento.id} lancamento={lancamento} />
        ))}
      </View>
    </View>
  </ScrollView>
  );
}

