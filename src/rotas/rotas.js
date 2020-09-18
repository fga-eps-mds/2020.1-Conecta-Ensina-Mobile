import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Materias from '../paginas/Materias';
import Home from '../paginas/Home';

const StackRotas = createStackNavigator();

function Rotas(){
  return (
    <StackRotas.Navigator initialRouteName = "Home">
      <StackRotas.Screen
        name="Materias"
        component={Materias}
      />
      <StackRotas.Screen
        name="Home"
        component={Home}
      />
    </StackRotas.Navigator>
  );
}
export default Rotas;
