import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {AuthContext} from '../../src/contexts/auth';
import Profile from '../../src/pages/Profile';

describe('Testing Profile page', () => {
  const student = {
    cep: '',
    number: '',
    details: '',
    cpf: '',
    description: '',
    institution: '',
  };
  const user = {
    firstName: '',
    lastName: '',
    email: '',
    cellphone: '',
  };
  const navigation = {
    navigate: jest.fn(),
  };
  const signOut = jest.fn();

  test('Should matches snapshot', () => {
    const tree = render(
      <AuthContext.Provider value={{signOut, user, student}}>
        <Profile navigation={navigation} />
      </AuthContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Editar' button", () => {
    const {getByTestId} = render(<Profile navigation={navigation} />);
    const button = getByTestId('Editar');

    fireEvent.press(button);
  });

  test("Should press 'Sair' button", () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{signOut}}>
        <Profile navigation={navigation} />
      </AuthContext.Provider>,
    );

    const button = getByTestId('Sair');

    fireEvent.press(button);
  });
});
