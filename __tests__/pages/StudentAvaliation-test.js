import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {StudentContext} from '../../src/contexts/student';
import {RateContext} from '../../src/contexts/rate';
import StudentAvaliation from '../../src/pages/StudentAvaliation';

jest.mock('../../src/services/gradeResolver');

describe('Testing StudentAvaliation', () => {
  const student = {
    grade: '',
    User: {
      firstName: '',
      lastName: '',
    },
  };
  const navigation = {
    navigate: jest.fn(),
  };
  const createRate = jest.fn();
  test('Should matches snapshot', () => {
    const tree = render(
      <StudentContext.Provider value={{student}}>
        <RateContext.Provider value={{createRate}}>
          <StudentAvaliation navigation={navigation} />
        </RateContext.Provider>
      </StudentContext.Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Submit' button", () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{student}}>
        <RateContext.Provider value={{createRate}}>
          <StudentAvaliation navigation={navigation} />
        </RateContext.Provider>
      </StudentContext.Provider>,
    );

    const button = getByTestId('Submit');

    fireEvent.press(button);
  });
  test("Should change text in 'RedCommentContainer'", () => {
    const {getByTestId} = render(
      <StudentContext.Provider value={{student}}>
        <RateContext.Provider value={{createRate}}>
          <StudentAvaliation navigation={navigation} />
        </RateContext.Provider>
      </StudentContext.Provider>,
    );

    const container = getByTestId('RedComment');

    fireEvent.changeText(container);
  });
});
