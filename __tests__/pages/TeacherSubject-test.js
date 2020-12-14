import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {SubjectContext} from '../../src/contexts/subject';
import TeacherSubject from '../../src/pages/TeacherSubject';

describe('Testing TeacherSubject page', () => {
  const subject = [{id: 1}, {id: 2}];
  const loadSubjects = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };

  test('Should renders page', () => {
    const tree = render(
      <SubjectContext.Provider value={{subject, loadSubjects}}>
        <TeacherSubject navigation={navigation} />
      </SubjectContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test('Should select subject', () => {
    const {getAllByTestId} = render(
      <SubjectContext.Provider value={{subject, loadSubjects}}>
        <TeacherSubject navigation={navigation} />
      </SubjectContext.Provider>,
    );
    const button = getAllByTestId('SquareButton');

    fireEvent.press(button[0]);
    fireEvent.press(button[1]);
  });
  test('Should unselect subject', () => {
    const {getAllByTestId} = render(
      <SubjectContext.Provider value={{subject, loadSubjects}}>
        <TeacherSubject navigation={navigation} />
      </SubjectContext.Provider>,
    );
    const button = getAllByTestId('SquareButton');

    fireEvent.press(button[0]);

    fireEvent.press(button[0]);
  });

  test('Should press next button before select a subject', () => {
    const {getAllByTestId, getByTestId} = render(
      <SubjectContext.Provider value={{subject, loadSubjects}}>
        <TeacherSubject navigation={navigation} />
      </SubjectContext.Provider>,
    );
    const square = getAllByTestId('SquareButton');
    const next = getByTestId('NextButton');

    fireEvent.press(square[0]);
    fireEvent.press(next);
  });
  test('Should press next button after select a subject', () => {
    const {getByTestId} = render(
      <SubjectContext.Provider value={{subject, loadSubjects}}>
        <TeacherSubject navigation={navigation} />
      </SubjectContext.Provider>,
    );
    const next = getByTestId('NextButton');

    fireEvent.press(next);
  });
});
