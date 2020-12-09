import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CompletedClass from '../../src/pages/CompletedClass';
import {ClassroomContext} from '../../src/contexts/classroom';
import {StudentContext} from '../../src/contexts/student';

describe('Testing CompletedClass page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  let statusClasses;
  const setStudent = jest.fn();
  const setStatusClass = jest.fn();
  const studentStack = [{user: {firstName: '', lastName: ''}}];
  beforeEach(() => {
    statusClasses = [
      {
        cep: '11111111',
        number: 305,
        details: 'complemento',
        dtclass: '2020-11-24T17:54:32.582Z',
      },
      {
        cep: '22222222',
        number: 154,
        details: 'complemento',
        dtclass: '2020-11-24T17:54:32.582Z',
      },
    ];
  });
  test('Should match snapshot', () => {
    const tree = render(
      <StudentContext.Provider value={{studentStack}}>
        <ClassroomContext.Provider value={{statusClasses}}>
          <CompletedClass navigation={navigation} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test("Should press button 'VerMais'", () => {
    const {getAllByTestId} = render(
      <StudentContext.Provider value={{setStudent, studentStack}}>
        <ClassroomContext.Provider value={{setStatusClass, statusClasses}}>
          <CompletedClass navigation={navigation} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    const button = getAllByTestId('VerMais');

    fireEvent.press(button[0]);
    fireEvent.press(button[1]);
  });
});
