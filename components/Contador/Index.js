import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import estilos from './estilo';

const Contador = () => {

  const [Vogal, setVogal] = useState('0');

  const MudarVogal = () => {

    const sorteio = parseInt(Math.random() * 5)

    switch (sorteio) {
      case 0:
        setVogal("A");
        break;
      case 1:
        setVogal("E");
        break;
      case 2:
        setVogal("I");
        break;
      case 3:
        setVogal("O");
        break;
      case 4:
        setVogal("U")
        break;
      default:
        break;
    }
  }

  // <-------------- EXECUÇÃO -------------->
  return (
    <View style={estilos.container}>
      

      <Text style={estilos.texto}>  { Vogal } </Text>

      <Button
        title='Sorteia'
        onPress={ () => MudarVogal() }
      />
    </View>
  );
}
export default Contador;