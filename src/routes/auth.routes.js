import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
import StudentRegister from '../pages/StudentRegister';
import TeacherRegister from '../pages/TeacherRegister';

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="StudentRegister"
        component={StudentRegister}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="TeacherRegister"
        component={TeacherRegister}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}
export default AuthRoutes;
