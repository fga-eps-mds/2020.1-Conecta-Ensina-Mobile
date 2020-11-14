import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import Filters from '../pages/Filters';
import Teachers from '../pages/Teachers';
import Profile from '../pages/Profile';
import TeacherProfile from '../pages/TeacherProfile';
import Edit from '../pages/Edit';
import ConfirmedClass from '../pages/ConfirmedClass';
import ShowClass from '../pages/ShowClass';
import ClassroomDetails from '../pages/ClassroomDetails';

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
      <AlunoStack.Screen
        name="TeacherProfile"
        component={TeacherProfile}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="Edit"
        component={Edit}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="ConfirmedClass"
        component={ConfirmedClass}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="ShowClass"
        component={ShowClass}
        options={{headerShown: false}}
      />
      <AlunoStack.Screen
        name="ClassroomDetails"
        component={ClassroomDetails}
        options={{headerShown: false}}
      />
    </AlunoStack.Navigator>
  );
}

export default AlunoRoutes;
