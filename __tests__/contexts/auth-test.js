import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import AuthProvider, {AuthContext} from '../../src/contexts/auth';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Testing Classroom Context', () => {
  const TestComponent = () => {
    const {user, signIn} = useContext(AuthContext);
    return (
      <View>
        <TouchableOpacity
          testID="signIn"
          onPress={() => signIn('12c06dd6-187a-4a50-927f-5d08b367ee89')}
        />
        <Text testID="user">{user && user.firstName}</Text>
      </View>
    );
  };

  test('Should triggers signIn function when is succeeded for admin', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        message: 'Login efetuado com sucesso!',
        role: 1,
        password: 'password',
      }),
    );

    const {getByTestId} = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    const button = getByTestId('signIn');
    await fireEvent.press(button);

    expect(fetch).toBeCalled();
  });
  test('Should triggers signIn function when is succeeded for teacher', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const {getByTestId} = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    const button = getByTestId('signIn');
    await fireEvent.press(button);

    expect(fetch).toBeCalled();
  });
  test('Should triggers signIn function when is succeeded for student', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        message: 'Login efetuado com sucesso!',
        role: 3,
        password: 'password',
      }),
    );

    const {getByTestId} = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    const button = getByTestId('signIn');
    await fireEvent.press(button);

    expect(fetch).toBeCalled();
  });
  test('Should triggers signIn function when failed', async () => {
    fetch.mockReject(() => Promise.reject('API failure'));

    const {getByTestId} = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
    );

    const button = getByTestId('signIn');
    await fireEvent.press(button);

    expect(fetch).toBeCalled();
  });
});
