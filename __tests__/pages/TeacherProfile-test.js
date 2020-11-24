import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TeacherProfile from '../../src/pages/TeacherProfile';
import {ClassroomContext} from '../../src/contexts/classroom';
import {StudentContext} from '../../src/contexts/student';

jest.mock('../../src/contexts/classroom.js');

describe('Testing teacher profile page', () => {
  const createClass = jest.fn();
  const readClass = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };
  const getStudent2 = jest.fn();
  const route = {
    params: {
      selectedId: ' ',
    },
  };
  test('Should renders page', () => {
    const tree = render(<TeacherProfile route={route} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Continue' button", async () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider value={{createClass, readClass}}>
        <TeacherProfile navigation={navigation} route={route} />
      </ClassroomContext.Provider>,
    );
    const button = getByTestId('ContinueButton');

    await fireEvent.press(button);
  });
  test("Should press 'Complain Button'", async () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{getStudent2}}>
        <ClassroomContext.Provider value={{createClass}}>
          <TeacherProfile navigation={navigation} route={route} />
        </ClassroomContext.Provider>
      </StudentContext.Provider>,
    );

    const button = getByTestId('ComplainButton');

    await fireEvent.press(button);
  });
});
