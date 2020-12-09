import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import TeacherProvider, {TeacherContext} from '../../src/contexts/teacher';

describe('Testing Teacher Context', () => {
  const TestComponent = () => {
    const {loadTeachers, getTeacher} = useContext(TeacherContext);
    return (
      <View>
        <TouchableOpacity testID="loadTeacher" onPress={() => loadTeachers()} />
        <TouchableOpacity
          testID="getTeacher"
          onPress={() => getTeacher('12c06dd6-187a-4a50-927f-5d08b367ee89')}
        />
      </View>
    );
  };
  test('Should triggers loadTeacher', async () => {
    const {getByTestId} = render(
      <TeacherProvider>
        <TestComponent />
      </TeacherProvider>,
    );

    const button = getByTestId('loadTeacher');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers getTeacher', async () => {
    const {getByTestId} = render(
      <TeacherProvider>
        <TestComponent />
      </TeacherProvider>,
    );

    const button = getByTestId('getTeacher');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
