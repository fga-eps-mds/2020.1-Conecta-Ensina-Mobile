import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeProf from '../pages/HomeProf';
import AulaMarcada from '../pages/AulaMarcada';
import AulaPendente from '../pages/AulaPendente';
import AulaRealizada from '../pages/AulaRealizada';
import PerfilProf2 from '../pages/PerfilProf2';
import ConfirmaAulaPendente from '../pages/ConfirmaAulaPendente';

// import { Container } from './styles';
const ProfStack = createStackNavigator();

function ProfRoutes() {
  return (
    <ProfStack.Navigator>
      <ProfStack.Screen
        name="HomeProf"
        component={HomeProf}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="AulaMarcada"
        component={AulaMarcada}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="AulaPendente"
        component={AulaPendente}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="AulaRealizada"
        component={AulaRealizada}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="PerfilProf2"
        component={PerfilProf2}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="ConfirmaAulaPendente"
        component={ConfirmaAulaPendente}
        options={{headerShown: false}}
      />
    </ProfStack.Navigator>
  );
}

export default ProfRoutes;
