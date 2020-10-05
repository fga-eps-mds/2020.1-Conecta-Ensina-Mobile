import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ProfRoutes from './src/routes/prof.routes';

export default function App(){
  return (
    <NavigationContainer>
      <ProfRoutes/>
    </NavigationContainer>
  );
}
