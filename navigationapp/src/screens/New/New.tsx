import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function New() {
  const [nome, setNome] = useState(null);
  const [data, setData] = useState(null);
  const [valorTipo, setValorTipo] = useState(null);
  const [checked, setChecked] = useState('receita');
  const [adicionarOq, setAdicionarOq] = useState<string>("")

  const [cartao, setCartao] = useState(false);
  const [cardTipo, setCardTipo] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.container}>
          <View>
            <Text>Nome</Text>
            <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="Nome"
            keyboardType= "ascii-capable"
            />
          </View>
          <View>
            <Text>Data</Text>
            <TextInput
            style={styles.input}
            onChangeText={setData}
            value={data}
            placeholder="DD/MM/AAAA"
            keyboardType= "numeric"
            />
          </View>
          <View style={styles.cardButton}>
            <View style={styles.row}>
                <TouchableOpacity 
                style={styles.toggleButton}
                onPress={() => {
                  setCardTipo(false)
                  setCartao(true)
                  setAdicionarOq("Cartão")
                }} 
                >
                    <Text style={styles.toggleButtonText}>Cartão</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.toggleButton}
                onPress={() => {
                  setCartao(false)
                  setCardTipo(true)
                  setAdicionarOq("Receita / Despesa")
                }}
                >
                    <Text style={styles.toggleButtonText}>Tipo</Text>
                </TouchableOpacity>
            </View>
          </View>
          {cartao && (
            <View>
              <View style={styles.comprasRow}>
                <View style={styles.row}>
                  <Text style={styles.comprasText}>Cartão</Text>
                  <Text style={styles.comprasText}>Tipo</Text>
                  <Text style={styles.comprasText}>Tipo</Text>
              </View>
              <View style={styles.comprasRow}>
                <View style={styles.row}>
                  <TextInput 
                    style={styles.input}
                  />
                  <TextInput 
                    style={styles.input}
                  />
                  <TextInput 
                      style={styles.input}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
          {cardTipo && (
            <View>
              <View>
                <Text>Valor</Text>
                  <TextInput
                  style={styles.input}
                  onChangeText={setValorTipo}
                  value={valorTipo}
                  placeholder="Valor"
                  keyboardType= "numeric"
                  />
              </View>
              <View>
                <View style={styles.radioContainer}>
                  <Text>Despesa</Text>
                  <RadioButton
                    value="despesa"
                    status={checked === 'despesa' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('despesa')}
                  />
                </View>
                <View style={styles.radioContainer}>
                  <Text>Receita</Text>
                  <RadioButton
                    value="receita"
                    status={checked === 'receita' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('receita')}
                  />
                </View>
              </View>
            </View>
          )}
          <View>
            <TouchableOpacity 
              style={styles.toggleButton}
              onPress={() => {}}
              >
                  <Text style={styles.toggleButtonText}>Adicionar{` ${adicionarOq}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 10,
  },  
  input: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
  },
  cardBody: {
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  cardButton: {
    padding: 16,
    marginBottom: 15,
  },
  toggleButton: {
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
  },
  toggleButtonText: {
      color: '#333',
      fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  }, 
  comprasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  comprasText: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
},
});
