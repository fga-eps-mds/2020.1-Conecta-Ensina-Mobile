import React from 'react';
import {render} from '@testing-library/react-native';
import ConfirmedClass from '../../src/pages/ConfirmedClass';
//import {} from '@react-native-community/datetimepicker';

describe('Testing CompletedClass page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  test('Should match snapshot', () => {
    const tree = render(<ConfirmedClass navigation={navigation} />);

    expect(tree).toMatchSnapshot();
  });
  /*test('Should press Data and show calendar', () => {
    const {getByTestId, debug} = render(
      <ConfirmedClass navigation={navigation} />,
    );

    const button = getByTestId('DataButton');

    fireEvent.press(button);

    debug();
  });*/
});
