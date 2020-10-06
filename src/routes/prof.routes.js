import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeProf from '../pages/HomeProf'
import AulaMarcada from '../pages/AulaMarcada'
import AulaPendente from '../pages/AulaPendente'

// import { Container } from './styles';
const ProfStack = createStackNavigator();

function ProfRoutes(){
  return (
    <ProfStack.Navigator>
        <ProfStack.Screen 
          name="HomeProf"
          component={HomeProf}
          options={{headerShown: false}}/>
        <ProfStack.Screen 
          name="AulaMarcada"
          component={AulaMarcada}
          options={{headerShown: false}}/>
        <ProfStack.Screen 
          name="AulaPendente"
          component={AulaPendente}
          options={{headerShown: false}}/>
    </ProfStack.Navigator>

  );
}

export default ProfRoutes;