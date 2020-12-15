import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import Edit from '../../src/pages/Edit';
import {AuthContext} from '../../src/contexts/auth';

describe('Testing Edit page', () => {
  let student;
  const updateUser = jest.fn();
  const navigation = {
    navigate: jest.fn(),
  };
  beforeEach(() => {
    student = {number: 100};
  });

  test('Should renders page', () => {
    const tree = render(
      <AuthContext.Provider
        value={{student, updateUser}}
        navigation={navigation}>
        <Edit />
      </AuthContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Submit' button", async () => {
    const {getByTestId} = await render(
      <AuthContext.Provider value={{student}}>
        <Edit />
      </AuthContext.Provider>,
    );

    const button = getByTestId('button');

    await act(async () => {
      await fireEvent.press(button);
    });
    //debug();
  });
});
