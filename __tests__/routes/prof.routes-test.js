import React from 'react';
import {render} from '@testing-library/react-native';
import ProfRoutes from '../../src/routes/prof.routes';
import {NavigationContainer} from '@react-navigation/native';

describe('Testing ProfRoutes ', () => {
  test('Should Match Snapshot', () => {
    const route = render(
      <NavigationContainer>
        <ProfRoutes />
      </NavigationContainer>,
    ).toJSON();

    expect(route).toMatchSnapshot();
  });
});
