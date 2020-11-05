import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import Filters from '../pages/Filters';
import Teachers from '../pages/Teachers';
import Profile from '../pages/Filters';

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
        name="Subjects"
        component={Subjects}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Filters"
        component={Filters}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Teachers"
        component={Teachers}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </AlunoStack.Navigator>
  );
}

export default AlunoRoutes;
