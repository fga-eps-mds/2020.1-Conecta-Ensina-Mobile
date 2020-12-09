import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import UserProvider, {UserContext} from '../../src/contexts/user';

describe('Testing UserContext', () => {
  test('should trigger getUser function', async () => {
    const TestComponent = () => {
      const {user, getUser} = useContext(UserContext);
      return (
        <View>
          <Text testID="user">{user !== {} && user.firstName}</Text>
          <TouchableOpacity
            testID="getUser"
            onPress={async () => {
              await getUser('12c06dd6-187a-4a50-927f-5d08b367ee89');
            }}
          />
        </View>
      );
    };

    const {getByTestId} = render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    const button = getByTestId('getUser');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
