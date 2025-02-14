import { View, ScrollView } from 'react-native';
import Saudacao from './Saudacao/';
import SelectAno from './Select/';
import LancamentoCartao from './Object/LancamentoCartao';
import LancamentoType from './Object/LancamentoType';
import { Lancamentos } from './Object/Lancamentos';


const dadosCliente = {
  nomeClient: "Davi",
}

const lancamentosCliente: any[] = [
  new LancamentoCartao('1',
    '📅', 
    'Inter',
    new Date('2025-01-10'),
    true,
    [
      { id: '1', name: 'Compra 1', valor: 500.00, data: new Date('2025-01-05') },
      { id: '2', name: 'Compra 2', valor: 700.00, data: new Date('2025-01-06') },
      { id: '3', name: 'Compra 3', valor: 300.00, data: new Date('2025-01-07') },
    ],
  ), 
  new LancamentoCartao(
    '2',
    '📅',  
    'Boleto',
    new Date('2025-01-10'),
    false,
    [
      { id: '1', name: 'Compra 1', valor: 94.00, data: new Date('2025-01-05') },
    ],
  ),
  new LancamentoType(
    '2',
    '📅',  
    'Salario',
    new Date('2025-01-10'),
    false,
    true,
    1950
  )
]

const lancamentos = new Lancamentos();
lancamentos.adicona(lancamentosCliente[0]);
lancamentos.adicona(lancamentosCliente[1]);
lancamentos.adicona(lancamentosCliente[2]);
lancamentos.organizarDatas();
console.log(lancamentos.time)

export default function Home() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: '#fff' }}>
        <Saudacao nomeUsuario={dadosCliente.nomeClient} />
        <SelectAno lancamentosClient={lancamentos} />
      </View>
    </ScrollView>
  );
}
