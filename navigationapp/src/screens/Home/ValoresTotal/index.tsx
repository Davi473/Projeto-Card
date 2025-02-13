import {View, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';



export default function ValoresTotal(props: any) {
  return (
    <View style={styles.margin}>
        <View style={styles.card}>    
            <View style={styles.row}>
                <Text style={styles.textEntrada}>Entrada</Text>
                <Text style={styles.textSaida}>Saida</Text> 
            </View> 
            <View style={styles.row}>
                <Text style={styles.text}>R$ {props.entrada}</Text>
                <Text style={styles.text}>R$ {props.saida}</Text>
            </View>        
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    margin: {
        padding: 10
    },
    card: {
        padding: 16,
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    textEntrada: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        fontWeight: "bold",
        color: "green"
    },
    textSaida: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        fontWeight: "bold",
        color: "red"
    },
    text: {
        fontSize: 16,
        flex: 1,
        textAlign: 'center',
    },
});

