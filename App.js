import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './Screens/Splash/Splash';
import Inicio from './Screens/Inicio/Inicio';
import Cart from './Screens/Cart/Cart';
import AboutUs from './Screens/AboutUs/AboutUs';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name='Cart' component={Cart} />
         <Stack.Screen name='AboutUs' component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
