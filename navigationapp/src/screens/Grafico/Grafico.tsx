import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { PieChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const data = [
  { name: "Saida", population: 1200, color: "red", legendFontColor: "#7F7F7F", legendFontSize: 15 },
  { name: "Entrada", population: 1900, color: "green", legendFontColor: "#7F7F7F", legendFontSize: 15 },
];

export default function Grafico() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 10
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
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
});
