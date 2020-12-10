import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import ComplainProvider, {ComplainContext} from '../../src/contexts/complain';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing Complain Context', () => {
  const user = {
    id: '',
  };
  const TestComponent = () => {
    const {createComplain} = useContext(ComplainContext);
    return (
      <View>
        <TouchableOpacity
          testID="createComplain"
          onPress={() =>
            createComplain('não compareceu a aula', 'Professor Teste')
          }
        />
      </View>
    );
  };
  test('Should triggers createComplain', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ComplainProvider>
          <TestComponent />
        </ComplainProvider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('createComplain');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
