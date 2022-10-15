import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './components/Contador/Index';
import Imagem from './components/Imagem/Index';
import Texto from './components/Texto/index';


export default function App() {
  return (
   <View style={ styles.container }>
    <Texto/>
     <Imagem/>
      <Contador/> 
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }

});
