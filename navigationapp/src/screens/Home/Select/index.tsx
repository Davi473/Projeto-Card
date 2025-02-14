import {View, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import ValoresTotal from '../ValoresTotal';
import LancamentoType from '../Object/LancamentoType';
import LancamentoCartao from '../Object/LancamentoCartao';
import LancamentoTypeCard from '../Cartao/Type';
import LancamentoCartaoCard from '../Cartao/Cartao';
import { Lancamentos } from '../Object/Lancamentos';


type MesValor = {
  mes: string,
  valor: number
}
type Ano = {
  ano: number;
  valor: number
  meses: MesValor[]
};

type Lancamento = {
  id: string,
  name: string,
  icone: string,  // Pode ser um ícone de sua escolha
  valor: string,
  data: Date,
  compras: Compras[],
}

type Compras = {
  id: string, name: string, valor: string, data: string
}

const nomeMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]

const anoAtual = new Date().getFullYear();

export default function SelectAno(props: {lancamentosClient: Lancamentos}) 
{
    const lancamentoClienteLista = props.lancamentosClient.lista()

  return (
    <View>
      <ValoresTotal entrada={props.lancamentosClient.valorTotalEntrada} saida={props.lancamentosClient.valorTotalSaida} />
      {
        lancamentoClienteLista.map(lancamento => {
          if (lancamento instanceof LancamentoType)
            return <LancamentoTypeCard key={lancamento.id} lancamento={lancamento} />;
          if (lancamento instanceof LancamentoCartao)
            return <LancamentoCartaoCard key={lancamento.id} lancamento={lancamento} />;
        })
      }
    </View>
  )
  // const [lancamentos, setlLancamentos] = useState<any[]>([])
  // const [tempos] = useState<Ano[]>(props.lancamentosClient.time)
  // const [anoSelecionadoValor, setAnoSelecionadoValor] = useState<number>(0)
  // const [mostrarSelecionarMeses, setMostrarSelecionarMeses] = useState<boolean>(false)
  // const [mesesSelecionado, setMesesSelecionado] = useState<MesValor[] | []>([])
  // const [mesSelecioando, setMesSelecioando] = useState<number>(0);
  // const [anoSelecionado, setAnoSelecionado] = useState<number>();

  // function selectMeses(anoEscolido: number)
  // {
  //   const resultado = tempos.filter(ano => ano.valor === Number(anoEscolido));
  //   if (resultado) {
  //     setAnoSelecionado(resultado[0].ano)
  //     setMesesSelecionado(resultado[0].meses);
  //   } else {
  //     setMesesSelecionado([]);
  //   }
  // }

  // function selectLancamentos(mes: number)
  // {  
  //   const selectLancamentosCliente = props.lancamentosClient.lista().filter(lancamento => 
  //     lancamento.data.getFullYear() === Number(anoSelecionado) && lancamento.data.getMonth() === Number(mes));
  //   setlLancamentos(selectLancamentosCliente);
  // }

  // return (
  //   <View>
  //     <View style={styles.margin}>
  //       <View style={styles.card}>
  //         <View style={styles.container}>
  //           <Picker
  //             selectedValue={anoSelecionadoValor}
  //             onValueChange={(itemValue) => {
  //               setAnoSelecionadoValor(itemValue)
  //               setMostrarSelecionarMeses(false)
  //               selectMeses(itemValue)
  //               setMostrarSelecionarMeses(true)
  //             }}
  //             style={styles.picker}
  //           >
  //             {tempos.map(ano => (
  //               <Picker.Item style={styles.text} label={ano.ano.toString()} value={ano.valor} />
  //             ))}
  //           </Picker>
  //         </View>
  //         {mostrarSelecionarMeses && (
  //           <View style={styles.container}>
  //             <Picker
  //               selectedValue= {mesSelecioando}
  //               onValueChange={(itemValue) => {
  //                 selectLancamentos(itemValue)
  //                 setMesSelecioando(itemValue)
  //               }}
  //               style={styles.picker}
  //             >
  //               {mesesSelecionado.map((mes) => (
  //                 <Picker.Item style={styles.text} label={mes.mes} value={mes.valor} />
  //               ))}
  //             </Picker>
  //           </View>
  //         )}
  //       </View>
  //     </View>
  //     <ValoresTotal entrada={1230} saida={1000} />
  //     <View>
        
  //     </View>
  // </View>
  // );
}

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  picker: {
    width: 200,
    height: 50,
  },
  margin: {
      padding: 10
  },
  card: {
      padding: 2,
      marginTop: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      marginBottom: 15,
  },
  text: {
      fontSize: 16,
      flex: 1,
      textAlign: 'center',
  },
});