import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Background3 from '../../src/components/Background3';

it('renders correctly', () => {
  const tree = renderer.create(<Background3 />).toJSON();
  expect(tree).toMatchSnapshot();
});
