import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Materias from '../pages/Materias';
import Filtros from '../pages/Filtros';
import Professores from '../pages/Professores';
import Perfil from '../pages/Perfil';
import PerfilProf from '../pages/PerfilProf';
import Edit from '../pages/Edit';

const AlunoStack = createStackNavigator();

function AlunoRoutes() {
  return (
    <AlunoStack.Navigator>
      <AlunoStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Materias"
        component={Materias}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Filtros"
        component={Filtros}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Professores"
        component={Professores}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Perfil"
        component={Perfil}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="PerfilProf"
        component={PerfilProf}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Edit"
        component={Edit}
        options={{headerShown: false}}
      />
    </AlunoStack.Navigator>
  );
}

export default AlunoRoutes;
