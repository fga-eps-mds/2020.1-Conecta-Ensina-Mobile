import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AdmContext} from '../../src/contexts/admin';
import ReportedUsers from '../../src/pages/ReportedUsers';

describe('Testing ReportedUsers', () => {
  const getProfessoUser = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };
  const pendingUsers = [
    {
      institution: '',
      description: '',
      degree: '',
      graduation_area: '',
      video: '',
      Student: {
        User: {
          firstName: '',
          lastName: '',
          email: '',
          cellphone: '',
        },
      },
    },
  ];
  const reportedUsers = [
    {
      institution: '',
      description: '',
      degree: '',
      graduation_area: '',
      video: '',
      Student: {
        User: {
          firstName: '',
          lastName: '',
          email: '',
          cellphone: '',
        },
      },
    },
  ];
  const students = {
    institution: '',
    description: '',
    degree: '',
    graduation_area: '',
    video: '',
    Student: {
      User: {
        firstName: '',
        lastName: '',
        email: '',
        cellphone: '',
      },
    },
  };
  test('Should matches snapshot', () => {
    const tree = render(
      <AdmContext.Provider
        value={{students, pendingUsers, reportedUsers, getProfessoUser}}>
        <ReportedUsers navigation={navigation} />
      </AdmContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should press square buttons', () => {
    const {getAllByTestId, debug} = render(
      <AdmContext.Provider
        value={{students, pendingUsers, reportedUsers, getProfessoUser}}>
        <ReportedUsers navigation={navigation} />
      </AdmContext.Provider>,
    );

    const buttons = getAllByTestId('ContainerTeacher');

    fireEvent.press(buttons[0]);
    //debug();
  });
});
