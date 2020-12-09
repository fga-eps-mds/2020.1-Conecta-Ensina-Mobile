import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import ConfirmedClass from '../../src/pages/ConfirmedClass';
import {ClassroomContext} from '../../src/contexts/classroom';
//import {} from '@react-native-community/datetimepicker';

describe('Testing CompletedClass page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  const getClassroom = jest.fn();
  test('Should match snapshot', () => {
    const tree = render(<ConfirmedClass navigation={navigation} />);

    expect(tree).toMatchSnapshot();
  });
  test('Should press Data and show calendar', async () => {
    const {getByTestId, UNSAFE_getByType} = render(
      <ClassroomContext.Provider value={{getClassroom}}>
        <ConfirmedClass navigation={navigation} />
      </ClassroomContext.Provider>,
    );

    const button2 = getByTestId('native.calendar.SELECT_DATE_SLOT-2021-01-02');

    await act(async () => {
      await fireEvent.press(button2);
    });
    //fireEvent.press(button);
  });
  test("Should press 'Continue' Button", async () => {
    const {getByTestId} = render(
      <ClassroomContext.Provider value={{getClassroom}}>
        <ConfirmedClass navigation={navigation} />
      </ClassroomContext.Provider>,
    );

    const button = getByTestId('ContinueContainer');

    await fireEvent.press(button);
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
