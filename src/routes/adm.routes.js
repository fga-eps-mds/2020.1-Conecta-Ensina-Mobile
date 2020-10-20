import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfessoresPendente from '../pages/ProfessoresPendente';
import HomeAdm from '../pages/HomeAdm';


const AdmStack = createStackNavigator();

function AdmRoutes(){
  return(
    <AdmStack.Navigator>
      <AdmStack.Screen 
          name="HomeAdm"
          component={HomeAdm}
          options={{headerShown: false}}/>
      <AdmStack.Screen
        name="ProfessoresPendente"
        component={ProfessoresPendente}
        options={{headerShown: false}}
      />
    </AdmStack.Navigator>
  );
}
export default AdmRoutes;