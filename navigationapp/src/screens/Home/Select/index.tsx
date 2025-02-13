import {View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

type Ano = {
  ano: number;
  meses: string[]; 
};

const anos: Ano[] = [
  {ano: 2024, meses: ["Janeiro", "Fevereiro"]},
  {ano: 2025, meses: ["Janeiro", "Fevereiro", "Março"]}
]

const anoAtual = new Date().getFullYear();

export default function SelectAno() {
  const [selectedValue, setSelectedValue] = useState(anoAtual)
  const [monstrarMeses, setMostrarMeses] = useState(false);
  const [meses, setMeses] = useState<string[]>([]);

  function selectMeses(anoEscolido: any)
  {
    const resultado = anos.filter(ano => ano.ano === Number(anoEscolido));
    if (resultado) {
      setMeses(resultado[0].meses);
    } else {
      setMeses([]);
    }
  }

  return (
    <View>
      <View style={styles.margin}>
        <View style={styles.card}>
          <View style={styles.container}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue) => {
                setSelectedValue(itemValue)
                setMostrarMeses(false)
                selectMeses(itemValue)
                setMostrarMeses(true)
              }}
              style={styles.picker}
            >
              {anos.map(ano => (
                <Picker.Item style={styles.text} label={ano.ano.toString()} value={ano.ano} />
              ))}
            </Picker>
          </View>
          {monstrarMeses && (
            <View style={styles.container}>
              <Picker
                selectedValue="Selecione Um Mes"
                // onValueChange={(itemValue) => selectMeses(itemValue)}
                style={styles.picker}
              >
                {meses.map((mes) => (
                  <Picker.Item style={styles.text} label={mes} value={mes} />
                ))}
              </Picker>
            </View>
          )}
        </View>
      </View>
  </View>
  );
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