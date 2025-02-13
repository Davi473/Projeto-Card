import {View, ScrollView} from 'react-native';
import Saudacao from './Saudacao/';
import SelectAno from './Select/';
import LancamentoCartao from './Object/LancamentoCartao';
import LancamentoType from './Object/LancamentoType';
import Lancamento from './Object/Lancamento';
import { useState } from 'react';
import { Lancamentos } from './Object/Lancamentos';

const entradas = {
  nomeClient: "Davi",
  tempos: [
    {ano: 2024, valor: 0, meses: [{mes: "Janeiro", valor: 0 }, {mes: "Fevereiro", valor: 1}]},
    {ano: 2025, valor: 1, meses: [{mes: "Janeiro", valor: 0 }, {mes: "Fevereiro", valor: 1}, {mes: "Março", valor: 2}]}
  ],
  lancamentos: [
    {
      id: '1',
      nome: 'Inter',
      icone: '📅',  // Pode ser um ícone de sua escolha
      data: new Date('2025-01-10'),
      cartao: true,
      compras: [
        { id: '1', name: 'Compra 1', valor: 500.00, data: new Date('2025-01-05') },
        { id: '2', name: 'Compra 2', valor: 700.00, data: new Date('2025-01-06') },
        { id: '3', name: 'Compra 3', valor: 300.00, data: new Date('2025-01-07') },
      ],
    }, 
    {
      id: '1',
      nome: 'Nubank',
      icone: '📅',  // Pode ser um ícone de sua escolha
      valor: '1500.00',
      data: new Date('2025-01-10'),
      receita: true,
      cartao: false,
      valor: 120
    }
  ]
}

export default function Home() {
  const [lancamentos, setLancamentos] = useState<Lancamentos>()
  const cliente = () =>
  {
    const lancamentos = new Lancamentos();
    const lancamento = entradas.lancamentos.forEach( lancamento => 
    {
      if (lancamento.cartao) 
        lancamentos.adiciona(new LancamentoCartao(lancamento.id, lancamento.icone, 
          lancamento.nome, lancamento.data, lancamento.cartao, lancamento.compras));

      if (!lancamento.cartao && lancamento.receita)
        lancamento.adiciona(new LancamentoType(lancamento.id, lancamento.icone, 
          lancamento.nome, lancamento.data, lancamento.cartao, lancamento.receita, lancamento.valor));
    }, [])
  }
  cliente();

  return (
  <ScrollView>
    <View style={{backgroundColor: '#fff'}}>
      <Saudacao nomeUsuario={client.nomeClient} />
      <SelectAno lancamentos={client.lancamentos}></SelectAno>
    </View>
  </ScrollView>
  );
}

