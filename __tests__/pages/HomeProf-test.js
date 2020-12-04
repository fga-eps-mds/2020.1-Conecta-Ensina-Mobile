import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ClassroomContext} from '../../src/contexts/classroom';
import SquareButton from '../../src/components/SquareButton';
import HomeProf from '../../src/pages/HomeProf';

describe('Testing HomeProf page', async () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const readClass = jest.fn();
  const loadStatusClassesStudents = jest.fn();
  const classroom = {};

  test('Should renders page', () => {
    const tree = render(<HomeProf />);

    expect(tree).toMatchSnapshot();
  });
  test('Should press square buttons', () => {
    const {UNSAFE_queryAllByType} = render(
      <ClassroomContext.Provider
        value={{readClass, loadStatusClassesStudents, classroom}}>
        <HomeProf navigation={navigation} />
      </ClassroomContext.Provider>,
    );
    const button = UNSAFE_queryAllByType(SquareButton);

    fireEvent.press(button[0]);
    fireEvent.press(button[1]);
    fireEvent.press(button[2]);
  });
  test("Should press 'Continue' button", () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider
        value={{readClass, loadStatusClassesStudents, classroom}}>
        <HomeProf navigation={navigation} />
      </ClassroomContext.Provider>,
    );
    const button = getByTestId('button');

    fireEvent.press(button);
  });
});
