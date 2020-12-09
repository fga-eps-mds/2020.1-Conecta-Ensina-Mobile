import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import Calendar from '../../src/components/Calendar';

describe('', () => {
  test('Should render component', () => {
    const tree = render(<Calendar />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
