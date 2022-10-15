import { Image, View } from "react-native";
import Samurai from '../../assets/Samurai2.jpg';
import estilos from "./estilos";

const Imagem = () => {
    return ( 
        <View style={estilos.container}>
            <Image style={estilos.Samurai} source={ Samurai } />
        </View>
     );
}

export default Imagem;

