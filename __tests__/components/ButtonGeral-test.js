import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import ButtonGeral from '../../src/components/ButtonGeral';

it('renders correctly', () => {
  const tree = renderer.create(<ButtonGeral />).toJSON();
  expect(tree).toMatchSnapshot();
});
