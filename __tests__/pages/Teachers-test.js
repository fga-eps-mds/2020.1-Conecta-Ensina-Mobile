import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import Teachers from '../../src/pages/Teachers';
import {TeacherContext} from '../../src/contexts/teacher';

describe('Testing Teachers page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const route = {
    params: {
      subject: '',
    },
  };
  const teacher = [
    {
      id: '',
      Student: {
        User: {
          firstName: '',
          lastName: '',
        },
      },
    },
  ];
  const getTeacher = jest.fn();
  const loadTeachers = jest.fn();
  test('Should renders page', () => {
    const tree = render(
      <TeacherContext.Provider value={{teacher, getTeacher, loadTeachers}}>
        <Teachers navigation={navigation} route={route} />
      </TeacherContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test('Should press a teacher button', () => {
    const {getAllByTestId} = render(
      <TeacherContext.Provider value={{teacher, getTeacher, loadTeachers}}>
        <Teachers navigation={navigation} route={route} />
      </TeacherContext.Provider>,
    );
    const buttons = getAllByTestId('ContainerStars');
    act(() => {
      fireEvent.press(buttons[0]);
    });
  });
  test('Should press continue before press a teacher', async () => {
    const {getByTestId, getAllByTestId} = render(
      <TeacherContext.Provider value={{teacher, getTeacher, loadTeachers}}>
        <Teachers navigation={navigation} route={route} />
      </TeacherContext.Provider>,
    );
    const button = getByTestId('Continue');
    const buttons = getAllByTestId('ContainerStars');

    await act(async () => {
      await fireEvent.press(buttons[0]);
    });

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should press continue after press a teacher', async () => {
    const {getByTestId} = render(
      <TeacherContext.Provider value={{teacher, getTeacher, loadTeachers}}>
        <Teachers navigation={navigation} route={route} />
      </TeacherContext.Provider>,
    );
    const button = getByTestId('Continue');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
