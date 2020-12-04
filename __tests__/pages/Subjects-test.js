import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import Subjects from '../../src/pages/Subjects';
import {SubjectContext} from '../../src/contexts/subject';

describe('Testing Subjects page', () => {
  const subject = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const loadSubjects = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };
  test('Should renders page', () => {
    const tree = render(
      <SubjectContext.Provider value={{subject, loadSubjects}}>
        <Subjects navigation={navigation} />
      </SubjectContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test('Should press square buttons', () => {
    const {getAllByTestId} = render(
      <SubjectContext.Provider value={{subject, loadSubjects}}>
        <Subjects navigation={navigation} />
      </SubjectContext.Provider>,
    );
    const button = getAllByTestId('SquareButton');

    fireEvent.press(button[0]);
    fireEvent.press(button[1]);
  });
  test("Should press 'Continue' button", () => {
    const {getByTestId} = render(
      <SubjectContext.Provider value={{subject, loadSubjects}}>
        <Subjects navigation={navigation} />
      </SubjectContext.Provider>,
    );

    const button = getByTestId('ContinueContainer');

    fireEvent.press(button);
  });
});
