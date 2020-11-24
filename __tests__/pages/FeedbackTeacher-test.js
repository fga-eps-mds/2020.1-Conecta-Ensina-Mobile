import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import FeedbackTeacher from '../../src/pages/FeedbackTeacher';
import {StudentContext} from '../../src/contexts/student';
import {ComplainContext} from '../../src/contexts/complain';

describe('Testing FeedbackTeacher', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const route = {
    params: {
      params: ' ',
    },
  };
  const student = {
    user: {
      id: '',
    },
    student: {
      student: {
        grade: 1,
      },
    },
  };
  const createComplain = jest.fn();
  test('Should renders page', () => {
    const tree = render(<FeedbackTeacher route={route} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Should press button 'Enviar Denúncia'", async () => {
    const {getByTestId} = render(
      <ComplainContext.Provider value={{createComplain}}>
        <StudentContext.Provider value={{student}}>
          <FeedbackTeacher navigation={navigation} route={route} />
        </StudentContext.Provider>
      </ComplainContext.Provider>,
    );
    const button = getByTestId('SendComplain');

    await fireEvent.press(button);
  });
});
