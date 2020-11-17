import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';

import Background3 from '../../src/components/Background3';

describe('Testing Background 3', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  test('renders correctly', () => {
    const tree = renderer.create(<Background3 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Should press button', () => {
    const {getByTestId} = render(
      <Background3 student={true} navigation={navigation} />,
    );

    const button = getByTestId('buttonRegistrar');

    fireEvent.press(button);
  });
});
