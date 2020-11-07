import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TeacherProfile from '../../src/pages/TeacherProfile';
import {ClassroomContext} from '../../src/contexts/classroom';

jest.mock('../../src/contexts/classroom.js');

describe('Testing teacher profile page', () => {
  const createClass = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };

  test('Should renders page', () => {
    const tree = render(<TeacherProfile />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should press button', () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider value={{createClass}}>
        <TeacherProfile navigation={navigation} />
      </ClassroomContext.Provider>,
    );
    const button = getByTestId('teacherProfileButton');

    fireEvent.press(button);
  });
});
