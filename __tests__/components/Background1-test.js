import React from 'react';
import Background1 from '../../src/components/Background1';
import {render, fireEvent} from '@testing-library/react-native';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing Background1', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const user = {
    firstName: '',
  };
  test('Should userAvatar be pressed', () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <Background1 navigation={navigation} />
      </AuthContext.Provider>,
    );

    const userAvatar = getByTestId('userAvatar');

    fireEvent.press(userAvatar);
    expect(navigation.navigate).toBeCalled();
  });

  test('Should match snapshot', () => {
    const tree = render(<Background1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
