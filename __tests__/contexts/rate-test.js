import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import RateProvider, {RateContext} from '../../src/contexts/rate';
import {ClassroomContext} from '../../src/contexts/classroom';

describe('Testing Rate Context', () => {
  const statusClass = {
    student: '',
    teacher: '',
    id: '',
  };
  const TestComponent = () => {
    const {createRate} = useContext(RateContext);
    return (
      <View>
        <TouchableOpacity
          testID="createRate"
          onPress={() => createRate('comentarios', 'rate_creator', 'rate')}
        />
      </View>
    );
  };
  test('Should triggers createRate', async () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider value={{statusClass}}>
        <RateProvider>
          <TestComponent />
        </RateProvider>
      </ClassroomContext.Provider>,
    );

    const button = getByTestId('createRate');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
