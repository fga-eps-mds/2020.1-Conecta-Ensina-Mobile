import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PendingClass from '../../src/pages/PendingClass';
import {StudentContext} from '../../src/contexts/student';
import {ClassroomContext} from '../../src/contexts/classroom';

describe('Testing Pending Class Page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const getStudent = jest.fn();
  const getClass = jest.fn();
  const classes = [
    {
      dtclass: '',
      cep: '',
      duration: '',
      grade: '',
      details: '',
      student: '',
      id: '',
    },
  ];
  test('Should renders page', () => {
    const tree = render(
      <StudentContext.Provider value={{getStudent}}>
        <ClassroomContext.Provider value={{getClass, classes}}>
          <PendingClass navigation={navigation} />
          ).toJSON();
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Ver Mais' button ", async () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{getStudent}}>
        <ClassroomContext.Provider value={{getClass, classes}}>
          <PendingClass navigation={navigation} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    const button = getByTestId('VerMais');

    await fireEvent.press(button);
  });
});