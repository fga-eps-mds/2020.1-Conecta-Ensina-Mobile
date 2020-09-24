import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Materias from '../pages/Materias';
import Home from '../pages/Home';

const StackRotas = createStackNavigator();

function Rotas(){
  return (
    <StackRotas.Navigator initialRouteName = "Materias">
      <StackRotas.Screen
        name="Materias"
        component={Materias}
        options={{headerShown: false}}
      />
      <StackRotas.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </StackRotas.Navigator>
  );
}
export default Rotas;
