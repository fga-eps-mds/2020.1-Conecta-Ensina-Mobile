import React from 'react';
import {render} from '@testing-library/react-native';
import AuthRoutes from '../../src/routes/auth.routes';
import {NavigationContainer} from '@react-navigation/native';

describe('Testing AuthRoutes ', () => {
  test('Should Match Snapshot', () => {
    const route = render(
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>,
    ).toJSON();

    expect(route).toMatchSnapshot();
  });
});
