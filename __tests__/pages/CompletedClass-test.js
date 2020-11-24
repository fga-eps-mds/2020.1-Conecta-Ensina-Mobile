import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CompletedClass from '../../src/pages/CompletedClass';

describe('Testing CompletedClass page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  test('Should match snapshot', () => {
    const tree = render(<CompletedClass navigation={navigation} />);

    expect(tree).toMatchSnapshot();
  });
});
