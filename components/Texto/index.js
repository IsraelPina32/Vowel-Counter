import { Text, View } from "react-native";
import estilos from './estilo2';


const texto = () =>{
    return(
        <View style={estilos.contanier}>
              <Text style={estilos.TextStyle}>Sorteio de Vogais</Text>
        </View>
      
    );
}

export default texto;
