import React from 'react';
import {render} from '@testing-library/react-native';
import Routes from '../../src/routes/index';
import {NavigationContainer} from '@react-navigation/native';
import {ClassroomContext} from '../../src/contexts/classroom';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing AdmRoutes ', () => {
  const firstClass = {
    dtclass: '2020-11-12',
  };
  const loadNextClass = jest.fn();
  const loadUserClasses = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };
  const loading = false;
  test('Should renders ProfRoutes', () => {
    const typeUser = 'Professor';
    const signed = true;
    const route = render(
      <NavigationContainer>
        <AuthContext.Provider value={{typeUser, signed, loading}}>
          <ClassroomContext.Provider
            value={{firstClass, loadNextClass, loadUserClasses}}>
            <Routes />
          </ClassroomContext.Provider>
        </AuthContext.Provider>
      </NavigationContainer>,
    ).toJSON();

    expect(route).toMatchSnapshot();
  });
  test('Should renders AlunoRoutes', () => {
    const typeUser = 'Aluno';
    const signed = true;
    const route = render(
      <NavigationContainer>
        <AuthContext.Provider value={{typeUser, signed, loading}}>
          <ClassroomContext.Provider
            value={{firstClass, loadNextClass, loadUserClasses}}>
            <Routes />
          </ClassroomContext.Provider>
        </AuthContext.Provider>
      </NavigationContainer>,
    ).toJSON();

    expect(route).toMatchSnapshot();
  });
  test('Should renders AdmRoutes', () => {
    const typeUser = 'Adm';
    const signed = true;
    const route = render(
      <NavigationContainer>
        <AuthContext.Provider value={{typeUser, signed, loading}}>
          <ClassroomContext.Provider
            value={{firstClass, loadNextClass, loadUserClasses}}>
            <Routes />
          </ClassroomContext.Provider>
        </AuthContext.Provider>
      </NavigationContainer>,
    ).toJSON();

    expect(route).toMatchSnapshot();
  });
  test('Should renders AuthRoutes', () => {
    const typeUser = ' ';
    const signed = false;
    const route = render(
      <NavigationContainer>
        <AuthContext.Provider value={{typeUser, signed, loading}}>
          <ClassroomContext.Provider
            value={{firstClass, loadNextClass, loadUserClasses}}>
            <Routes />
          </ClassroomContext.Provider>
        </AuthContext.Provider>
      </NavigationContainer>,
    ).toJSON();

    expect(route).toMatchSnapshot();
  });
});
