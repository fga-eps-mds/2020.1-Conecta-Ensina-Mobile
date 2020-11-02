import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/';
import AuthProvider from './src/contexts/auth';
import AdmProvider from './src/contexts/admin';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AdmProvider>
          <Routes />
        </AdmProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
