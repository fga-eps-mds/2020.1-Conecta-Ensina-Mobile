import React from 'react';
import Background1 from '../../src/components/Background1';
import {render, fireEvent} from '@testing-library/react-native';

describe('Testing Background1', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  test('Should userAvatar be pressed', () => {
    const {getByTestId} = render(<Background1 navigation={navigation} />);

    const userAvatar = getByTestId('userAvatar');

    fireEvent.press(userAvatar);
    expect(navigation.navigate).toBeCalled();
  });

  test('Should match snapshot', () => {
    const tree = render(<Background1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
