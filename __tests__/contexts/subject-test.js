import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import SubjectProvider, {SubjectContext} from '../../src/contexts/subject';

describe('Testing Subject Context', () => {
  const TestComponent = () => {
    const {loadSubjects} = useContext(SubjectContext);
    return (
      <View>
        <TouchableOpacity
          testID="loadSubjects"
          onPress={() => loadSubjects()}
        />
      </View>
    );
  };
  test('Should triggers loadSubjects', async () => {
    const {getByTestId} = render(
      <SubjectProvider>
        <TestComponent />
      </SubjectProvider>,
    );

    const button = getByTestId('loadSubjects');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
