import React from 'react';
import 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import SwitchFilter from '../../src/components/SwitchFilter';
import Theme from '../../Theme';

describe('Testing SwitchFilter Component', () => {
  /*  const onChange = jest.fn();

  test('SwitchSelector should be pressed', () => {
    const {getByTestId, UNSAFE_getByType} = render(
      <Theme>
        <SwitchFilter onChange={onChange} />
      </Theme>,
    );

    const switchSelector = UNSAFE_getByType(SwitchFilter);

    fireEvent.press(switchSelector);

    expect(onChange).toBeCalled();
  });
*/
  test('Component should be render', () => {
    const tree = render(
      <Theme>
        <SwitchFilter />
      </Theme>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
