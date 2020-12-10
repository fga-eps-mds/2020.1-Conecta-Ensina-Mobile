import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import ClassroomDetails from '../../src/pages/ClassroomDetails';
import {ClassroomContext} from '../../src/contexts/classroom';
import {StudentContext} from '../../src/contexts/student';
import {UserContext} from '../../src/contexts/user';
import CountDown from 'react-native-countdown-component';

describe('Testing Classroom Details', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const route = {
    params: {
      item: '',
    },
  };

  const classroom = {
    details: '',
    address: {
      logradouro: '',
      bairro: '',
      uf: '',
    },
    number: 1231,
    status: 3,
  };

  const getStudent = jest.fn();

  const updateStatusClassroom = jest.fn();

  test('Should renders first snapshot page', () => {
    const tree = render(
      <ClassroomDetails navigation={navigation} route={route} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should renders second snapshot page', () => {
    const tree = render(
      <ClassroomContext.Provider value={{updateStatusClassroom}}>
        <ClassroomDetails navigation={navigation} route={route} />
      </ClassroomContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should press start button', () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider value={{classroom}}>
        <ClassroomDetails route={route} />
      </ClassroomContext.Provider>,
    );

    const button = getByTestId('StartButton');

    fireEvent.press(button);
  });

  test('Should tests timer', async () => {
    const {getByTestId, UNSAFE_getByType} = render(
      <ClassroomContext.Provider value={{classroom, updateStatusClassroom}}>
        <ClassroomDetails route={route} />
      </ClassroomContext.Provider>,
    );

    const button = getByTestId('StartButton');
    await fireEvent.press(button);

    // const timer = UNSAFE_getByType(CountDown);

    // expect(timer.props.onFinish).toBeFunction();
  });
});
