import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/';
import AuthProvider from './src/contexts/auth';
import AdmProvider from './src/contexts/admin';
import ClassroomProvider from './src/contexts/classroom';
import SubjectProvider from './src/contexts/subject';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AdmProvider>
          <SubjectProvider>
            <ClassroomProvider>
              <Routes />
            </ClassroomProvider>
          </SubjectProvider>
        </AdmProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
