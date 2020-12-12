import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AdmContext} from '../../src/contexts/admin';
import TeacherConfirmation from '../../src/pages/TeacherConfirmation';

describe('Testing Teacher Confirmation', () => {
  const route = {
    params: {
      item: '',
    },
  };
  const statusUpdate = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };
  const usersAdmin = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      cellphone: '',
    },
    teacher: {
      description: '',
      degree: '',
      graduation_area: '',
      video: '',
    },
    student: {
      institution: '',
    },
  };
  const students = [
    {
      id: '101',
    },
    {
      id: '102',
    },
  ];

  test('Should matches snapshot', () => {
    const tree = render(
      <AdmContext.Provider value={{students, usersAdmin, statusUpdate}}>
        <TeacherConfirmation navigation={navigation} route={route} />
      </AdmContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should press Aceitar button', () => {
    const {getByTestId} = render(
      <AdmContext.Provider value={{students, usersAdmin, statusUpdate}}>
        <TeacherConfirmation navigation={navigation} route={route} />
      </AdmContext.Provider>,
    );

    const button = getByTestId('Aceitar');

    fireEvent.press(button);
    //debug();
  });

  test('Should press Recusar button', () => {
    const {getByTestId} = render(
      <AdmContext.Provider value={{students, usersAdmin, statusUpdate}}>
        <TeacherConfirmation navigation={navigation} route={route} />
      </AdmContext.Provider>,
    );

    const button = getByTestId('Recusar');

    fireEvent.press(button);
    //debug();
  });
});
