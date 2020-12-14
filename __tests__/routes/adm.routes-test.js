import React from 'react';
import {render} from '@testing-library/react-native';
import AdmRoutes from '../../src/routes/adm.routes';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../../src/contexts/auth';
import {AdmContext} from '../../src/contexts/admin';

describe('Testing AdmRoutes ', () => {
  test('Should Match Snapshot', () => {
    const route = render(
      <NavigationContainer>
        <AdmRoutes />
      </NavigationContainer>,
    ).toJSON();

    expect(route).toMatchSnapshot();
  });
});
