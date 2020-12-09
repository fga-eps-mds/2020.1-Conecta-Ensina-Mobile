import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import Background4 from '../../src/components/Background4';

describe('Testing Background 4', () => {
  test('should renders component', () => {
    const tree = render(<Background4 />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
