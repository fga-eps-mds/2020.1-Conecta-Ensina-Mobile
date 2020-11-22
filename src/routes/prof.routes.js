import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeProf from '../pages/HomeProf';
import ConfirmedClass from '../pages/ConfirmedClass';
import ConfirmedClassDetails from '../pages/ConfirmedClassDetails';
import PendingClass from '../pages/PendingClass';
import CompletedClass from '../pages/CompletedClass';
import TeacherProfile2 from '../pages/TeacherProfile2';
import PendingClassConfirmation from '../pages/PendingClassConfirmation';
import EditTeacher from '../pages/EditTeacher';
import TeacherClassDetails from '../pages/TeacherClassDetails';

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
        name="ConfirmedClass"
        component={ConfirmedClass}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="ConfirmedClassDetails"
        component={ConfirmedClassDetails}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="PendingClass"
        component={PendingClass}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="CompletedClass"
        component={CompletedClass}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="TeacherProfile2"
        component={TeacherProfile2}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="PendingClassConfirmation"
        component={PendingClassConfirmation}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="EditTeacher"
        component={EditTeacher}
        options={{headerShown: false}}
      />
      <ProfStack.Screen
        name="TeacherClassDetails"
        component={TeacherClassDetails}
        options={{headerShown: false}}
      />
    </ProfStack.Navigator>
  );
}

export default ProfRoutes;
