import React from 'react';
import TextCard from '../../src/components/TextCard';
import {render} from '@testing-library/react-native';

describe('Test for TextCard component', () => {
  const data = {
    text: 'test',
  };
  test('should render component', () => {
    const tree = render(<TextCard data={data} />).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
