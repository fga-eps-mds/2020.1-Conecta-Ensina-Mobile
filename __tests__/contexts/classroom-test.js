import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import ClassroomProvider, {
  ClassroomContext,
} from '../../src/contexts/classroom';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing Classroom Context', () => {
  const user = {
    id: '',
  };
  const TestComponent = () => {
    const {
      loadNextClass,
      createClass,
      loadUserClasses,
      loadStatusClasses,
      readClass,
      setStatusClass,
      setStatusClasses,
      getClass,
      updateStatusClasses,
      loadStatusClassesStudents,
    } = useContext(ClassroomContext);
    return (
      <View>
        <TouchableOpacity
          testID="createClass"
          onPress={() => createClass('12c06dd6-187a-4a50-927f-5d08b367ee89')}
        />
        <TouchableOpacity
          testID="loadUserClasses"
          onPress={() => loadUserClasses()}
        />
        <TouchableOpacity
          testID="loadStatusClass"
          onPress={() => loadStatusClasses()}
        />
        <TouchableOpacity testID="readClass" onPress={() => readClass()} />
        <TouchableOpacity
          testID="setStatusClass"
          onPress={() => setStatusClass()}
        />
        <TouchableOpacity
          testID="setStatusClasses"
          onPress={() => setStatusClasses()}
        />
        <TouchableOpacity
          testID="loadNextClass"
          onPress={() => loadNextClass()}
        />
        <TouchableOpacity testID="getClass" onPress={() => getClass()} />
        <TouchableOpacity
          testID="updateStatusClasses"
          onPress={() => updateStatusClasses()}
        />
        <TouchableOpacity
          testID="loadStatusClassesStudents"
          onPress={() => loadStatusClassesStudents()}
        />
      </View>
    );
  };

  test('Should triggers loadUserClasses', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomProvider>
          <TestComponent />
        </ClassroomProvider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('loadUserClasses');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers loadStatusClass', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomProvider>
          <TestComponent />
        </ClassroomProvider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('loadStatusClass');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers readClass', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomProvider>
          <TestComponent />
        </ClassroomProvider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('readClass');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers setStatusClass', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomProvider>
          <TestComponent />
        </ClassroomProvider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('setStatusClass');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers setStatusClasses', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomProvider>
          <TestComponent />
        </ClassroomProvider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('setStatusClasses');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers loadNextClass', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomProvider>
          <TestComponent />
        </ClassroomProvider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('loadNextClass');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers updateStatusClasses', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomProvider>
          <TestComponent />
        </ClassroomProvider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('updateStatusClasses');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
