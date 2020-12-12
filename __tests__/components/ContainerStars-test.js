import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import ContainerStars from '../../src/components/ContainerStars';

describe('Testing ContainerStars component', () => {
  const data = {
    firstName: 'name',
  };

  test('Should render component', () => {
    const tree = render(<ContainerStars data={data} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
