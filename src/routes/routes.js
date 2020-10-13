import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Materias from '../pages/Materias';
import Filtros from '../pages/Filtros';
import Professores from '../pages/Professores';
import RegistroAluno from '../pages/RegistroAluno';

const StackRoutes = createStackNavigator();

function Routes() {
  return (
    <StackRoutes.Navigator initialRouteName="Login">
      <StackRoutes.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <StackRoutes.Screen
        name="RegistroAluno"
        component={RegistroAluno}
        options={{headerShown: false}}
      />
      <StackRoutes.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <StackRoutes.Screen
        name="Materias"
        component={Materias}
        options={{headerShown: false}}
      />
      <StackRoutes.Screen
        name="Filtros"
        component={Filtros}
        options={{headerShown: false}}
      />
      <StackRoutes.Screen
        name="Professores"
        component={Professores}
        options={{headerShown: false}}
      />
    </StackRoutes.Navigator>
  );
}
export default Routes;
