import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import ButtonContinuar from '../../src/components/ButtonContinuar';

it('renders correctly', () => {
  const tree = renderer.create(<ButtonContinuar />).toJSON();
  expect(tree).toMatchSnapshot();
});
