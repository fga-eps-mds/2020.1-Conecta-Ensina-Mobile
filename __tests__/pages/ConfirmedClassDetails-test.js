import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ConfirmedClassDetais from '../../src/pages/ConfirmedClassDetails';
import {ClassroomContext} from '../../src/contexts/classroom';
import {StudentContext} from '../../src/contexts/student';

jest.mock('../../src/services/dateResolver');
jest.mock('../../src/services/timeResolver');

describe('Testing ConfirmedClassDetais page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const statusClass = {
    subject: 'subject',
    dtclass: 11,
    duration: 11,
  };
  const student = {
    user: {firstName: 'first', lastName: 'last'},
    student: {grade: 'grade'},
  };

  test('Should render page', () => {
    const tree = render(
      <StudentContext.Provider value={{student}}>
        <ClassroomContext.Provider value={{statusClass}}>
          <ConfirmedClassDetais navigation={navigation} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should press ContinueContainer button', () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{student}}>
        <ClassroomContext.Provider value={{statusClass}}>
          <ConfirmedClassDetais navigation={navigation} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    const continueContainer = getByTestId('ContinueContainer');
    fireEvent.press(continueContainer);
    expect(navigation.navigate).toBeCalled();
  });
});
