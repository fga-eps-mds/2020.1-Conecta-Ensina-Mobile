import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import StudentProvider, {StudentContext} from '../../src/contexts/student';

describe('Testing Student Context', () => {
  const student = {
    name: 'Jaime Ribeiro',
  };
  const TestComponent = () => {
    const {getStudent, stackStudents} = useContext(StudentContext);
    return (
      <View>
        <TouchableOpacity
          testID="getStudent"
          onPress={() => getStudent('12c06dd6-187a-4a50-927f-5d08b367ee89')}
        />
        <TouchableOpacity
          testID="stackStudent"
          onPress={() => stackStudents(student)}
        />
      </View>
    );
  };
  test('Should triggers getStudent', async () => {
    const {getByTestId} = render(
      <StudentProvider>
        <TestComponent />
      </StudentProvider>,
    );

    const button = getByTestId('getStudent');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers stackStudents', async () => {
    const {getByTestId} = render(
      <StudentProvider>
        <TestComponent />
      </StudentProvider>,
    );

    const button = getByTestId('stackStudent');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
