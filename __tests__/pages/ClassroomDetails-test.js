import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ClassroomDetails from '../../src/pages/ClassroomDetails';
import {ClassroomContext} from '../../src/contexts/classroom';
import {StudentContext} from '../../src/contexts/student';
import {UserContext} from '../../src/contexts/user';
import CountDown from 'react-native-countdown-component';

describe('Testing Classroom Details', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const classroom = {
    details: '',
    address: {
      logradouro: '',
      bairro: '',
      uf: '',
    },
    number: 1231,
  };

  const getStudent = jest.fn();

  test('Should matches snapshot page', () => {
    const tree = render(<ClassroomDetails navigation={navigation} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should press start button', () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider value={{classroom}}>
        <ClassroomDetails />
      </ClassroomContext.Provider>,
    );

    const button = getByTestId('StartButton');

    fireEvent.press(button);
  });

  test('Should test contexts functions', async () => {
    render(
      <StudentContext.Provider value={{getStudent}}>
        <ClassroomContext.Provider value={{classroom}}>
          <ClassroomDetails />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    await expect(getStudent).toHaveBeenCalled();
  });

  test('Should tests timer', async () => {
    const {getByTestId, UNSAFE_getByType} = render(
      <ClassroomContext.Provider value={{classroom}}>
        <ClassroomDetails />
      </ClassroomContext.Provider>,
    );

    const button = getByTestId('StartButton');
    await fireEvent.press(button);

    const timer = UNSAFE_getByType(CountDown);

    expect(timer.props.onFinish).toBeFunction();
  });
  test('Should press button finish', async () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider value={{classroom}}>
        <ClassroomDetails navigation={navigation} />
      </ClassroomContext.Provider>,
    );

    const button = getByTestId('StartButton');
    await fireEvent.press(button);

    const finish = getByTestId('finishButton');
    await fireEvent.press(finish);
  });
});
