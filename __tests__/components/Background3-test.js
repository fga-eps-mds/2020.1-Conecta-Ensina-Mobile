import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Background3 from '../../src/components/Background3';

describe('Testing Background3', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  test('Should buttonRegistrar be pressed', () => {
    
    const {getByTestId} = render(<Background3 navigation={navigation} student={true}/>);

    const buttonRegistrar = getByTestId('buttonRegistrar');

    fireEvent.press(buttonRegistrar);
    expect(navigation.navigate).toBeCalled();
  });

  test('Should match snapshot', () => {
    const tree = render(<Background3 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});