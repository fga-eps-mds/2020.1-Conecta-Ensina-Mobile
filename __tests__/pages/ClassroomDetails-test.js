import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ClassroomDetails from '../../src/pages/ClassroomDetails';
import {ClassroomContext} from '../../src/contexts/classroom';

describe('Testing Classroom Details', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  let classroom = {
    details: '',
    address: {
      logradouro: '',
      bairro: '',
      uf: '',
    },
    number: 1231,
  };

  test('Should renders page', () => {
    const tree = render(<ClassroomDetails navigation={navigation} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should press button', () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider value={{classroom}}>
        <ClassroomDetails navigation={navigation} />
      </ClassroomContext.Provider>,
    );

    const button = getByTestId('StartButton');

    fireEvent.press(button);
  });
});
