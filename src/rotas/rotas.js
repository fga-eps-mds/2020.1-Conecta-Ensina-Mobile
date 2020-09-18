import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Materias from '../pages/Materias';
import Filtros from '../pages/Filtros';

const StackRotas = createStackNavigator();

function rotas() {
  return (
    <StackRotas.Navigator>
      <StackRotas.Screen
        name="Materias"
        component={Materias}
        options={{headerShown: false}}
      />
      <StackRotas.Screen
        name="Filtros"
        component={Filtros}
        options={{headerShown: false}}
      />
    </StackRotas.Navigator>
  );
}

export default rotas;
