import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';
import ContainerTeacher from '../../src/components/ContainerTeacher';
import Theme from '../../Theme';

describe('Testing ContainerTeacher component', () => {
  const data = {
    firstName: 'name',
    lastName: 'last',
  };

  test('Should render component', () => {
    const tree = render(
      <Theme>
        <ContainerTeacher data={data} />
      </Theme>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
