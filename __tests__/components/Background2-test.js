import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Background2 from '../../src/components/Background2';

it('renders correctly', () => {
  const tree = renderer.create(<Background2 />).toJSON();
  expect(tree).toMatchSnapshot();
});
