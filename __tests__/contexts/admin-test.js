import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import AdmProvider, {AdmContext} from '../../src/contexts/admin';
import {AuthContext} from '../../src/contexts/auth';

describe('', () => {
  const user = {
    role: '',
  };
  const TestComponent = () => {
    const {
      getTeacherList,
      statusUpdate,
      getProfessoUser,
      getReportedUsers,
    } = useContext(AdmContext);
    return (
      <View>
        <TouchableOpacity
          testID="TeacherList"
          onPress={async () => {
            await getTeacherList();
          }}
        />
        <TouchableOpacity
          testID="TeacherUser"
          onPress={async () => {
            await getProfessoUser('12c06dd6-187a-4a50-927f-5d08b367ee89');
          }}
        />
        <TouchableOpacity
          testID="statusUpdate"
          onPress={async () => {
            await statusUpdate('12c06dd6-187a-4a50-927f-5d08b367ee89');
          }}
        />
        <TouchableOpacity
          testID="ReportedUsers"
          onPress={async () => {
            await getReportedUsers();
          }}
        />
      </View>
    );
  };
  test('Should triggers getTeacherList', async () => {
    const {getByTestId} = render(
      <AdmProvider>
        <TestComponent />
      </AdmProvider>,
    );
    const button = getByTestId('TeacherList');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers getProfessorUser', async () => {
    const {getByTestId} = render(
      <AdmProvider>
        <TestComponent />
      </AdmProvider>,
    );
    const button = getByTestId('TeacherUser');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers statusUpdate', async () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <AdmProvider>
          <TestComponent />
        </AdmProvider>
      </AuthContext.Provider>,
    );
    const button = getByTestId('statusUpdate');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers getReportedUsers', async () => {
    const {getByTestId} = render(
      <AdmProvider>
        <TestComponent />
      </AdmProvider>,
    );
    const button = getByTestId('ReportedUsers');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
