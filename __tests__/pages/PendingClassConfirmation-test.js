import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PendingClassConfirmation from '../../src/pages/PendingClassConfirmation';
import {StudentContext} from '../../src/contexts/student';
import {ClassroomContext} from '../../src/contexts/classroom';

describe('Testing Pending Class Page', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const student = {
    student: {
      cep: '',
      institution: '',
      grade: '',
      special: '',
      description: '',
      details: '',
    },
    user: {
      firstName: '',
      lastName: '',
    },
  };
  const getStudent = jest.fn();
  const updateStatusClasses = jest.fn();
  const route = {
    params: {
      item: {
        dtclass: '',
        cep: '',
        duration: '',
        grade: '',
        details: '',
        student: '',
        id: '',
      },
    },
  };

  test('Should renders page', () => {
    const tree = render(
      <StudentContext.Provider value={{getStudent, student}}>
        <ClassroomContext.Provider value={{updateStatusClasses}}>
          <PendingClassConfirmation navigation={navigation} route={route} />
          ).toJSON();
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Reportar' button ", async () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{getStudent, student}}>
        <ClassroomContext.Provider value={{updateStatusClasses}}>
          <PendingClassConfirmation navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    const button = getByTestId('Reportar');

    await fireEvent.press(button);
  });
  test("Should press 'Aceitar' button ", async () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{getStudent, student}}>
        <ClassroomContext.Provider value={{updateStatusClasses}}>
          <PendingClassConfirmation navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    const button = getByTestId('Aceitar');

    await fireEvent.press(button);
  });
  test("Should press 'Recusar' button ", async () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{getStudent, student}}>
        <ClassroomContext.Provider value={{updateStatusClasses}}>
          <PendingClassConfirmation navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    const button = getByTestId('Recusar');

    await fireEvent.press(button);
  });
});
