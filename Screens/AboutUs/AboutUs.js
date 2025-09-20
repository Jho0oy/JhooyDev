import {useState} from 'react';
import { StyleSheet, Text, View, Image,  ImageBackground, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export default function AboutUs() {

    const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./AboutUs/fundo.png')} style={styles.imageBackground}>
          <View style={styles.black}>
            <Text style={styles.text}>MVF SPORT</Text>
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