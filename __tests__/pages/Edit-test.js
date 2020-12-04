import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import Edit from '../../src/pages/Edit';

describe('Testing Edit page', () => {
  test('Should renders page', () => {
    const tree = render(<Edit />).toJSON();

    expect(tree).toMatchSnapshot();
  });
  test("Should press 'Submit' button", async () => {
    const {getByTestId, debug} = render(<Edit />);

    const button = getByTestId('button');

    await act(async () => {
      await fireEvent.press(button);
    });
    //debug();
  });
});
