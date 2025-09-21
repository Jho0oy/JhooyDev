import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


export default function AboutUs() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./AboutUs/fundo.png')} style={styles.imageBackground}>
        <View style={styles.black}>
          <Text style={styles.text}>JHOOY SPORT</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', top: 50, left: 20, zIndex: 1 }}
        >
          <Icon name="arrow-back-circle" size={32} color="white" />
        </TouchableOpacity>

        <View style={styles.camisaCard}>
          <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.camisaItem}>
              <Text style={styles.title}>🏆 Sobre Nós</Text>

              <Text style={styles.paragraph}>
                Somos apaixonados por futebol e acreditamos que vestir a camisa do seu time é muito mais do que usar
                uma peça de roupa — é mostrar quem você é, é viver a emoção dentro e fora do estádio.
              </Text>

              <Text style={styles.paragraph}>
                Nosso aplicativo nasceu para aproximar você das camisas que ama. Aqui você encontra uma seleção completa:
              </Text>

              <Text style={styles.list}>🏟️ Camisas de seleções — para vibrar em cada Copa ou amistoso.</Text>
              <Text style={styles.list}>
                🌍 Clubes europeus — traga para o seu dia a dia o estilo do futebol internacional.
              </Text>
              <Text style={styles.list}>🇧🇷 Times do Brasileirão — para quem respira o futebol nacional.</Text>
              <Text style={styles.list}>🔥 E muito mais — sempre com novidades e modelos atualizados.</Text>

              <Text style={styles.paragraph}>
                Nosso compromisso é oferecer produtos de qualidade, preços justos e uma compra rápida e segura, para
                que você possa focar no que realmente importa: torcer pelo seu time.
              </Text>

              <Text style={styles.subtitle}>💬 Fale Conosco</Text>

              <Text style={styles.paragraph}>
                Quer tirar dúvidas, sugerir novos produtos ou acompanhar seu pedido? Estamos prontos para te atender de
                forma rápida e prática:
              </Text>

              <Text style={styles.list}>📱 WhatsApp — atendimento direto e rápido.</Text>
              <Text style={styles.list}>📷 Instagram — acompanhe novidades e promoções.</Text>
              <Text style={styles.list}>✉️ E-mail — suporte completo para qualquer necessidade.</Text>

              <Text style={styles.final}>
                Vista-se com orgulho, represente suas cores e leve a paixão pelo futebol para todos os lugares! ⚽🔥
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },
  black: {
    backgroundColor: '#000',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    height: 200,
    justifyContent: 'center',
    zIndex: 1,
  },
  camisaCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.9,
    elevation: 10,
    marginTop: 200,
    maxHeight: Dimensions.get('window').height * 0.65,
  },
  camisaItem: {
    marginBottom: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
    marginBottom: 12,
    lineHeight: 22,
  },
  list: {
    fontSize: 16,
    color: '#000',
    marginBottom: 6,
    lineHeight: 22,
  },
  final: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 15,
    textAlign: 'center',
  },
});
