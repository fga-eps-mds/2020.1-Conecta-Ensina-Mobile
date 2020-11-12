import '@testing-library/jest-native/extend-expect';
import React from 'react';
import Login from '../../src/pages/Login/index';
import {render, fireEvent} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {AuthContext} from '../../src/contexts/auth.js';

//Silence warning
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('testing Login page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const signIn = jest.fn();
  test('should renders background', () => {
    const {getByTestId} = render(<Login />);
    const background = getByTestId('background');

    expect(background).toBeDefined();
  });

  test('should renders logo', () => {
    const {getByTestId} = render(<Login />);
    const logo = getByTestId('Logo');

    expect(logo.props.source).toEqual({
      testUri: '../../../src/assets/logo.png',
    });
  });

  test('should renders Icon', () => {
    const {getByTestId} = render(<Login />);
    const icon = getByTestId('Icon');

    expect(icon.props.source).toEqual({
      testUri: '../../../src/assets/user_white.png',
    });
  });

  test('button "Registrar-se" should be pressable', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{signIn}}>
        <Login navigation={navigation} />
      </AuthContext.Provider>,
    );
    await act(async () => {
      const RegistrarButton = getByTestId('signUp');
      const EntrarButton = await getByTestId('signIn');

      fireEvent.press(RegistrarButton);
      //Por enquanto o teste abaixo não funciona
      fireEvent.press(EntrarButton);
    });
  });
  test('Should check email and password function', () => {
    const {getByPlaceholderText, getByTestId} = render(<Login />);

    const username = getByPlaceholderText('Email');
    const password = getByTestId('password');

    fireEvent.changeText(username);
    fireEvent.changeText(password);

    expect(username.props.onChangeText).toBeDefined();
    expect(password.props.onChangeText).toBeDefined();
  });

  test('should be match snapshot', () => {
    const page = render(<Login />).toJSON();

    expect(page).toMatchSnapshot();
  });
});
