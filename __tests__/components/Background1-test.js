import React from 'react';
import Background1 from '../../src/components/Background1';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Background1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
