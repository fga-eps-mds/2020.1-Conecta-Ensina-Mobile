import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ShowClass from '../../src/pages/ShowClass';
import {ClassroomContext} from '../../src/contexts/classroom';
import {StudentContext} from '../../src/contexts/student';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing CompletedClass page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  let statusClasses;
  const getStudent = jest.fn();
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
    const user = {};
    const tree = render(
      <AuthContext.Provider value={{user}}>
        <StudentContext.Provider value={{getStudent}}>
          <ClassroomContext.Provider value={{statusClasses}}>
            <ShowClass navigation={navigation} />
          </ClassroomContext.Provider>
        </StudentContext.Provider>
      </AuthContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test("Should press button 'VerMais' for student", () => {
    const user = {
      role: 2,
    };
    const {getAllByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <StudentContext.Provider value={{getStudent}}>
          <ClassroomContext.Provider value={{statusClasses}}>
            <ShowClass navigation={navigation} />
          </ClassroomContext.Provider>
        </StudentContext.Provider>
      </AuthContext.Provider>,
    );

    const button = getAllByTestId('VerMais');

    fireEvent.press(button[0]);
    fireEvent.press(button[1]);
  });
  test("Should press button 'VerMais' for teacher", () => {
    const user = {
      role: 1,
    };
    const {getAllByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <StudentContext.Provider value={{getStudent}}>
          <ClassroomContext.Provider value={{statusClasses}}>
            <ShowClass navigation={navigation} />
          </ClassroomContext.Provider>
        </StudentContext.Provider>
      </AuthContext.Provider>,
    );

    const button = getAllByTestId('VerMais');

    fireEvent.press(button[0]);
    fireEvent.press(button[1]);
  });
});
