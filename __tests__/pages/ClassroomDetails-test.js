import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ClassroomDetails from '../../src/pages/ClassroomDetails';

describe('Testing Classroom Details', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  test('Should renders page', () => {
    const tree = render(<ClassroomDetails navigation={navigation} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should press button', () => {
    const {getByTestId} = render(<ClassroomDetails navigation={navigation} />);

    const button = getByTestId('StartButton');

    fireEvent.press(button);
  });
});
