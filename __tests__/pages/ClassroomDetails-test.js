import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import ClassroomDetails from '../../src/pages/ClassroomDetails';
import {ClassroomContext} from '../../src/contexts/classroom';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing Classroom Details', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const route = {
    params: {
      item: '',
    },
  };

  const updateStatusClassroom = jest.fn();

  test('Should renders first snapshot page', () => {
    const user = {
      role: 2,
    };
    const tree = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomDetails navigation={navigation} route={route} />
      </AuthContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should renders snapshot page for status = 2', () => {
    const classroom = {
      details: '',
      address: {
        logradouro: '',
        bairro: '',
        uf: '',
      },
      number: 1231,
      status: 2,
    };
    const user = {
      role: 2,
    };
    const tree = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomContext.Provider value={{classroom, updateStatusClassroom}}>
          <ClassroomDetails navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </AuthContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should renders snapshot page for status = 3', () => {
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
    const user = {
      role: 2,
    };
    const tree = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomContext.Provider value={{classroom, updateStatusClassroom}}>
          <ClassroomDetails navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </AuthContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should press start button and start classroom', async () => {
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
    const user = {
      role: 2,
    };
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomContext.Provider value={{classroom, updateStatusClassroom}}>
          <ClassroomDetails navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('StartButton');
    await fireEvent.press(button);
  });

  test('Should press finish button and start classroom', () => {
    const user = {
      role: 2,
    };
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomContext.Provider value={{updateStatusClassroom}}>
          <ClassroomDetails navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </AuthContext.Provider>,
    );

    const FinishButton = getByTestId('finishButton');
    fireEvent.press(FinishButton);
  });

  test('Should tests timer', async () => {
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
    const user = {
      role: 2,
    };
    const {getByTestId} = render(
      <AuthContext.Provider value={{user}}>
        <ClassroomContext.Provider value={{classroom, updateStatusClassroom}}>
          <ClassroomDetails navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </AuthContext.Provider>,
    );

    const button = getByTestId('StartButton');
    await fireEvent.press(button);
  });
});
