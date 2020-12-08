import React from 'react';
import {render} from '@testing-library/react-native';
import AlunoRoutes from '../../src/routes/aluno.routes';
import {NavigationContainer} from '@react-navigation/native';
import {ClassroomContext} from '../../src/contexts/classroom';

describe('Testing AdmRoutes ', () => {
  const firstClass = {
    dtclass: '2020-11-12',
  };
  const loadNextClass = jest.fn();
  const loadUserClasses = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };
  test('Should Match Snapshot', () => {
    const route = render(
      <NavigationContainer>
        <ClassroomContext.Provider
          value={{firstClass, loadNextClass, loadUserClasses}}>
          <AlunoRoutes />
        </ClassroomContext.Provider>
      </NavigationContainer>,
    ).toJSON();

    expect(route).toMatchSnapshot();
  });
});
