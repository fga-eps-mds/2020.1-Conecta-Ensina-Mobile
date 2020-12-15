import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import TeacherClassDetails from '../../src/pages/TeacherClassDetails';
import {ClassroomContext} from '../../src/contexts/classroom';
import {StudentContext} from '../../src/contexts/student';

jest.mock('../../src/services/gradeResolver');

describe('Testing TeacherClassDetails page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const student = {
    institution: '',
    description: '',
    degree: '',
    graduation_area: '',
    video: '',
    User: {
      firstName: '',
      lastName: '',
      email: '',
      cellphone: '',
    },
  };
  const classroom = {
    subject: '',
    duration: '',
    details: '',
    address: {
      bairro: '',
      logradouro: '',
      uf: '',
    },
    number: '',
  };

  test('Should renders page when timer is out', () => {
    const tree = render(
      <StudentContext.Provider value={{student}}>
        <ClassroomContext.Provider value={{classroom}}>
          <TeacherClassDetails />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test('Should press button to set timer', async () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{student}}>
        <ClassroomContext.Provider value={{classroom}}>
          <TeacherClassDetails />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );
    const StartButton = getByTestId('StartButton');

    await act(() => {
      fireEvent.press(StartButton);
    });
  });

  test('Should renders page when timer is up', async () => {
    const tree = render(
      <StudentContext.Provider value={{student}}>
        <ClassroomContext.Provider value={{classroom}}>
          <TeacherClassDetails />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test('Should press Finish button', async () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{student}}>
        <ClassroomContext.Provider value={{classroom}}>
          <TeacherClassDetails navigation={navigation} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );
    const StartButton = getByTestId('StartButton');

    await act(() => {
      fireEvent.press(StartButton);
    });

    const FinishButton = getByTestId('FinishButton');

    await act(() => {
      fireEvent.press(FinishButton);
    });
  });
});
