import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import StudentRegister from '../../src/pages/StudentRegister';

describe('Testing StudentRegister page', () => {
  test('Should renders page', () => {
    const tree = render(<StudentRegister />);

    expect(tree).toMatchSnapshot();
  });
});
