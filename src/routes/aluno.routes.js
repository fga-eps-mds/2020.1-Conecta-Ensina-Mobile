import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Materias from '../pages/Materias';
import Filtros from '../pages/Filtros';
import Professores from '../pages/Professores';

const AlunoStack = createStackNavigator();

function AlunoRoutes(){
  return(
    <AlunoStack.Navigator>
     <AlunoRoutes.Navigator>
      <AlunoRoutes.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <AlunoRoutes.Screen
        name="Materias"
        component={Materias}
        options={{headerShown: false}}
      />
      <AlunoRoutes.Screen
        name="Filtros"
        component={Filtros}
        options={{headerShown: false}}
      />
      <AlunoRoutes.Screen
        name="Professores"
        component={Professores}
        options={{headerShown: false}}
      />
      </AlunoRoutes.Navigator>
    </AlunoStack.Navigator>
  );
}

export default AlunoRoutes;