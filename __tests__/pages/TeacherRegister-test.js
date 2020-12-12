import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import TeacherRegister from '../../src/pages/TeacherRegister';

describe('Testing TeacherRegister page', () => {
  const route = {
    params: {
      buttons: '',
    },
  };

  test('Should renders page', () => {
    const tree = render(<TeacherRegister route={route} />);

    expect(tree).toMatchSnapshot();
  });
});
