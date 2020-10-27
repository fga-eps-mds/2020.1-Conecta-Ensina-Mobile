import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Materias from '../pages/Materias';
import Filtros from '../pages/Filtros';
import Professores from '../pages/Professores';
<<<<<<< HEAD

=======
>>>>>>> 2e5b79381e511676b1eacc73f6c6f9b5bf94b2d7
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
    </AlunoStack.Navigator>
  );
}

export default AlunoRoutes;
