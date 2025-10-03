import { StyleSheet, Text, View, Image,  ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../Services/CartService";



export default function Cart() {

    const navigation = useNavigation();

    const [cart, setCart] = useState([]);
    const userId = "testeUser123"; // depois vamos ligar com login

    useEffect(() => {
      async function fetchCart() {
        const carrinho = await getCart(userId);
        setCart(carrinho);
      }
      fetchCart();
    }, []);

    

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./Cart/fundo.png')} style={styles.imageBackground}>
          <View style={styles.black}>
            <Text style={styles.text}>JHOOY SPORT</Text>
          </View>

          <View style={{ marginTop: 220, padding: 20, width: "100%" }}>
            {cart.length === 0 ? (
              <Text style={{ color: "white", fontSize: 18 }}>🛒 Seu carrinho está vazio</Text>
            ) : (
              cart.map((item, index) => (
                <View key={index} style={{ marginBottom: 15, backgroundColor: "white", padding: 10, borderRadius: 8 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.nome}</Text>
                  <Text>Preço: R$ {item.preco}</Text>
                  <TouchableOpacity
                    style={{ backgroundColor: "red", padding: 5, borderRadius: 5, marginTop: 5 }}
                    onPress={async () => {
                      await removeFromCart(userId, item.id);
                      const carrinhoAtualizado = await getCart(userId);
                      setCart(carrinhoAtualizado);
                    }}
                  >
                    <Text style={{ color: "white", textAlign: "center" }}>Remover</Text>
                  </TouchableOpacity>
                </View>
              ))
            )}
          </View>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute',top: 50,left: 20,zIndex: 1}}>
            <Icon name="arrow-back-circle" size={32} color="white" />
          </TouchableOpacity>

        </ImageBackground> 
      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
  },
  butt: {
    backgroundColor: 'white',
    paddingHorizontal: '20%',
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 630
  },
  to_text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  }, 
    black: {
    backgroundColor: '#000',
    width: '100%',
    alignItems:'center',
    position:'absolute',  
    top: 0,
    height: 200,
    justifyContent: 'center',
    zIndex: 1
  },
});