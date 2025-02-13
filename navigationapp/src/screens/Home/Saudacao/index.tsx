import { StyleSheet, Text, View } from 'react-native';

let momentoDoDia = "Boa Noite";
const hora = new Date().getHours();
if (hora > 5 && hora < 12) momentoDoDia = "Bom Dia";
else if (hora > 12 && hora < 17) momentoDoDia = "Boa Tarde";

export default function Saudacao(props: any) 
{
  return (
    <View style={styles.container}>
      <Text style={styles.momentoDoDia}>{momentoDoDia},</Text>
      <Text style={styles.nome}>{props.nomeUsuario}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    padding: 50,
    paddingLeft: 10
  },
  momentoDoDia: {
    fontSize: 16, 
  },
  nome: {
    fontSize: 30,
    fontWeight: "bold",
  }
});
