import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '../../src/pages/Home';
import {ClassroomContext} from '../../src/contexts/classroom';
import SquareButton from '../../src/components/SquareButton';
import dateResolver from '../../src/services/dateResolver';

jest.mock('../../src/services/dateResolver');

describe('Testing Home page', () => {
  const firstClass = {
    dtclass: '2020-11-12',
  };
  const loadNextClass = jest.fn();
  const loadUserClasses = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };

  test('Should renders page', () => {
    dateResolver.mockReturnValue('25 de Nov de 2020');
    const tree = render(
      <ClassroomContext.Provider
        value={{firstClass, loadNextClass, loadUserClasses}}>
        <Home />
      </ClassroomContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should press square buttons', () => {
    const {UNSAFE_queryAllByType} = render(
      <ClassroomContext.Provider
        value={{firstClass, loadNextClass, loadUserClasses}}>
        <Home navigation={navigation} />
      </ClassroomContext.Provider>,
    );
    const button = UNSAFE_queryAllByType(SquareButton);

    fireEvent.press(button[0]);
    fireEvent.press(button[1]);
    fireEvent.press(button[2]);
  });

  test('Should press button Marcar Aula', () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider
        value={{firstClass, loadNextClass, loadUserClasses}}>
        <Home navigation={navigation} />
      </ClassroomContext.Provider>,
    );
    const button = getByTestId('MarcarAula');

    fireEvent.press(button);
  });
});
