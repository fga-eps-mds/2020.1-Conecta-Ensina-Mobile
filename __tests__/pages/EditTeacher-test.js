import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import EditTeacher from '../../src/pages/EditTeacher';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing EditTeacher page', () => {
  let student;
  beforeEach(() => {
    student = {number: 100};
  });
  test('Should renders page', () => {
    const tree = render(
      <AuthContext.Provider value={{student}}>
        <EditTeacher />
      </AuthContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
