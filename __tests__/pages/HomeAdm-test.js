import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeAdm from '../../src/pages/HomeAdm';
import {AuthContext} from '../../src/contexts/auth';
import {AdmContext} from '../../src/contexts/admin';
import SquareButton from '../../src/components/SquareButton';

describe('Testing HomeAdm Page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const students = [{id: ''}];
  const getProfessorList = jest.fn();
  const getReportedUsers = jest.fn();
  const getProfessoUser = jest.fn();
  const signOut = jest.fn();
  test('Should renders page', () => {
    const tree = render(
      <AuthContext.Provider value={{signOut}}>
        <AdmContext.Provider
          value={{
            students,
            getProfessorList,
            getProfessoUser,
            getReportedUsers,
          }}>
          <HomeAdm navigation={navigation} />
        </AdmContext.Provider>
      </AuthContext.Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('Should press square buttons', async () => {
    const {UNSAFE_queryAllByType} = render(
      <AuthContext.Provider value={{signOut}}>
        <AdmContext.Provider
          value={{
            students,
            getProfessorList,
            getProfessoUser,
            getReportedUsers,
          }}>
          <HomeAdm navigation={navigation} />
        </AdmContext.Provider>
      </AuthContext.Provider>,
    );
    const button = UNSAFE_queryAllByType(SquareButton);

    await fireEvent.press(button[0]);
    await fireEvent.press(button[1]);
    //fireEvent.press(button[2]);
  });
  test("Should press 'SignOut' button ", () => {
    const {getByTestId} = render(
      <AuthContext.Provider value={{signOut}}>
        <AdmContext.Provider
          value={{
            students,
            getProfessorList,
            getProfessoUser,
            getReportedUsers,
          }}>
          <HomeAdm navigation={navigation} />
        </AdmContext.Provider>
      </AuthContext.Provider>,
    );
    const button = getByTestId('signout');

    fireEvent.press(button);
  });
});
