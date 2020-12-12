import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import EditTeacher from '../../src/pages/EditTeacher';

describe('Testing EditTeacher page', () => {
  test('Should renders page', () => {
    const tree = render(<EditTeacher />);

    expect(tree).toMatchSnapshot();
  });
});
