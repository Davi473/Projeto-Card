import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Cartao(lancamento: any) 
{
  lancamento = lancamento.lancamento;
  const [mostrarCompras, setMostrarCompras] = useState(false);
  const formatar = (data: string) => {
    // Função para formatar a data, pode ser ajustada conforme necessário
    return new Date(data).toLocaleDateString();
  };
  
  return (
    <View style={styles.lancamentoContainer}>
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>
            {lancamento.name}
          </Text>
          <Text style={styles.cardIcon}>{lancamento.icone}</Text>
        </View>
        <Text style={styles.cardText}>
          Valor: R$ <Text style={styles.valor}>{lancamento.valor}</Text>
        </Text>
        <Text style={styles.cardText}>
          Vencimento: {formatar(lancamento.data)}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setMostrarCompras(!mostrarCompras)}
      >
        <Text style={styles.toggleButtonText}>
          {mostrarCompras ? 'Ocultar Compras' : 'Mostrar Compras'}
        </Text>
      </TouchableOpacity>

      {mostrarCompras && (
        <View style={styles.comprasContainer}>
          <FlatList
            data={lancamento.compras}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.comprasRow}>
                <Text style={styles.comprasText}>{item.name}</Text>
                <Text style={styles.comprasText}>R$ {item.valor}</Text>
                <Text style={styles.comprasText}>{formatar(item.data)}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    lancamentoContainer: {
        marginTop: 10,
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 15,
    },
    cardBody: {
        marginBottom: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardIcon: {
        fontSize: 20,
        color: '#555',
    },
    cardText: {
        fontSize: 16,
        marginVertical: 5,
    },
    valor: {
        color: 'red',
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
    comprasContainer: {
        marginTop: 15,
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
