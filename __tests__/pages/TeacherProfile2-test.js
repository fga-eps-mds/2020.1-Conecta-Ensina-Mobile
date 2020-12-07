import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AuthContext} from '../../src/contexts/auth';
import TeacherProfile2 from '../../src/pages/TeacherProfile2';

jest.mock('../../src/services/gradeResolver');

describe('Testing TeacherProfile2 page', () => {
  const student = {
    cep: '',
    number: '',
    details: '',
    cpf: '',
    description: '',
    institution: '',
    grade: '',
  };
  const user = {
    firstName: '',
    lastName: '',
    email: '',
    cellphone: '',
  };
  const teacher = {
    video: '',
    graduation_area: '',
    degree: '',
    bank: '',
    agency: '',
    account: '',
  };
  const navigation = {
    navigate: jest.fn(),
  };
  const signOut = jest.fn();

  test('Should matches snapshot', () => {
    const tree = render(
      <AuthContext.Provider value={{signOut, user, student, teacher}}>
        <TeacherProfile2 navigation={navigation} />
      </AuthContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Editar' button", () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{signOut, user, student, teacher}}>
        <TeacherProfile2 navigation={navigation} />
      </AuthContext.Provider>,
    );
    const button = getByTestId('Editar');

    fireEvent.press(button);
  });

  test("Should press 'Sair' button", () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{signOut, user, student, teacher}}>
        <TeacherProfile2 navigation={navigation} />
      </AuthContext.Provider>,
    );

    const button = getByTestId('Sair');

    fireEvent.press(button);
  });
});
