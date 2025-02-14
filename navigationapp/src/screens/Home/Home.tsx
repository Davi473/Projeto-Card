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
    '💳', 
    'Inter',
    new Date('2025-02-15'),
    true,
    [
      { id: '1', name: 'Kindle Unltd', valor: 19.90, data: new Date('2025-01-08') },
      { id: '2', name: 'Google One', valor: 5.09, data: new Date('2025-01-21') },
      { id: '3', name: 'IOF INTERNACIONAL', valor: 0.17, data: new Date('2025-01-22') },
      { id: '4', name: 'REi DO MATE', valor: 38.80, data: new Date('2025-01-22') },
      { id: '5', name: 'QSQ PIZZA HUT', valor: 54.80, data: new Date('2025-01-22') },
      { id: '6', name: 'UBER', valor: 15.15, data: new Date('2025-01-23') },
      { id: '7', name: 'UBER', valor: 22.60, data: new Date('2025-01-25') },
      { id: '8', name: 'POMERANA', valor: 25, data: new Date('2025-01-25') },
    ],
  ), 
  new LancamentoCartao(
    '2',
    '💳',  
    'Nubank',
    new Date('2025-01-01'),
    false,
    [
      { id: '1', name: 'Financiamento', valor: 94.19, data: new Date('2025-01-01') },
    ],
  ),
  new LancamentoType(
    '3',
    '🧾',  
    'Bradesco Finaciamento',
    new Date('2025-02-10'),
    false,
    false,
    159.85
  ),
  new LancamentoType(
    '4',
    '🧾',  
    'Jamille Pandora',
    new Date('2025-02-05'),
    false,
    false,
    149.17
  ),
  new LancamentoType(
    '5',
    '🧾',  
    'Internet Celular',
    new Date('2025-02-07'),
    false,
    false,
    209.98
  ),
  new LancamentoType(
    '6',
    '🧾',  
    'Salario',
    new Date('2025-02-07'),
    false,
    true,
    300
  ),
  new LancamentoType(
    '7',
    '🧾',  
    'Jamille Me Pago',
    new Date('2025-02-02'),
    false,
    true,
    139.09
  ), new LancamentoType(
    '8',
    '🧾',  
    'Senai',
    new Date('2025-02-10'),
    false,
    false,
    396.20
  )
]

const lancamentos = new Lancamentos();
lancamentos.adicona(lancamentosCliente[0]);
lancamentos.adicona(lancamentosCliente[1]);
lancamentos.adicona(lancamentosCliente[2]);
lancamentos.adicona(lancamentosCliente[3]);
lancamentos.adicona(lancamentosCliente[4]);
lancamentos.adicona(lancamentosCliente[5]);
lancamentos.adicona(lancamentosCliente[6]);
lancamentos.adicona(lancamentosCliente[7]);
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
