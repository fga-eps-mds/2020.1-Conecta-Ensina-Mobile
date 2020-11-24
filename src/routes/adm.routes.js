import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PendingTeacher from '../pages/PendingTeacher';
import HomeAdm from '../pages/HomeAdm';
import TeacherConfirmation from '../pages/TeacherConfirmation';
import ReportedUsers from '../pages/ReportedUsers';

const AdmStack = createStackNavigator();

function AdmRoutes() {
  return (
    <AdmStack.Navigator>
      <AdmStack.Screen
        name="HomeAdm"
        component={HomeAdm}
        options={{headerShown: false}}
      />
      <AdmStack.Screen
        name="PendingTeacher"
        component={PendingTeacher}
        options={{headerShown: false}}
      />
      <AdmStack.Screen
        name="TeacherConfirmation"
        component={TeacherConfirmation}
        options={{headerShown: false}}
      />
      <AdmStack.Screen
        name="ReportedUsers"
        component={ReportedUsers}
        options={{headerShown: false}}
      />
    </AdmStack.Navigator>
  );
}
export default AdmRoutes;
