import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Filters from '../../src/pages/Filters';
import {FiltersContext} from '../../src/contexts/filters';
import {TeacherContext} from '../../src/contexts/teacher';
//import {} from '@react-native-community/datetimepicker';

describe('Testing CompletedClass page', () => {
  const loadTeachers = jest.fn();
  const setFilters = jest.fn();
  const route = {
    params: {
      selectedId: '',
    },
  };
  const navigation = {
    navigate: jest.fn(),
  };
  test('Should match snapshot', () => {
    const tree = render(
      <TeacherContext.Provider value={{loadTeachers}}>
        <FiltersContext.Provider value={{setFilters}}>
          <Filters navigation={navigation} route={route} />
        </FiltersContext.Provider>
      </TeacherContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Continue' Button", async () => {
    const {getByTestId} = render(
      <TeacherContext.Provider value={{loadTeachers}}>
        <FiltersContext.Provider value={{setFilters}}>
          <Filters navigation={navigation} route={route} />
        </FiltersContext.Provider>
      </TeacherContext.Provider>,
    );

    const button = getByTestId('ContinueContainer');

    await fireEvent.press(button);
  });
});
