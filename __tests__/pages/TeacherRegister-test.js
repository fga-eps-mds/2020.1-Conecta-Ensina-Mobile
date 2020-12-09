import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import TeacherRegister from '../../src/pages/TeacherRegister';

describe('Testing TeacherRegister page', () => {
  test('Should renders page', () => {
    const tree = render(<TeacherRegister />);

    expect(tree).toMatchSnapshot();
  });
});
