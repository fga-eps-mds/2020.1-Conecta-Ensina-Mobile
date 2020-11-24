import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import ContinueContainer from '../../src/components/ContinueContainer';

it('renders correctly', () => {
  const tree = renderer.create(<ContinueContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
