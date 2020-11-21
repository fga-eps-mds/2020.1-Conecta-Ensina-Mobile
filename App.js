import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/';
import AuthProvider from './src/contexts/auth';
import AdmProvider from './src/contexts/admin';
import ClassroomProvider from './src/contexts/classroom';
import SubjectProvider from './src/contexts/subject';
import FiltersProvider from './src/contexts/filters';
import TeacherProvider from './src/contexts/teacher';
import UserProvider from './src/contexts/user';
import StudentProvider from './src/contexts/student';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <UserProvider>
          <AdmProvider>
            <SubjectProvider>
              <FiltersProvider>
                <TeacherProvider>
                  <StudentProvider>
                    <ClassroomProvider>
                      <Routes />
                    </ClassroomProvider>
                  </StudentProvider>
                </TeacherProvider>
              </FiltersProvider>
            </SubjectProvider>
          </AdmProvider>
        </UserProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
