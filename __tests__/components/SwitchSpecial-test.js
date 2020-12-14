import React from 'react';
import 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import SwitchSpecial from '../../src/components/SwitchSpecial';
import Theme from '../../Theme';

describe('Testing SwitchSpecial component', () => {
  test('SwitchSpecial should be render', () => {
    const tree = render(
      <Theme>
        <SwitchSpecial />
      </Theme>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
