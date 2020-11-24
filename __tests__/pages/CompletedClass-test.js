import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CompletedClass from '../../src/pages/CompletedClass';
import {ClassroomContext} from '../../src/contexts/classroom';
describe('Testing CompletedClass page', () => {
  const navigation = {
    navigate: jest.fn(),
  };
  let statusClasses;
  beforeEach(() => {
    statusClasses = [
      {
        cep: '11111111',
        number: 305,
        details: 'complemento',
        dtclass: '2020-11-24T17:54:32.582Z',
      },
      {
        cep: '22222222',
        number: 154,
        details: 'complemento',
        dtclass: '2020-11-24T17:54:32.582Z',
      },
    ];
  });
  test('Should match snapshot', () => {
    const tree = render(
      <ClassroomContext.Provider value={{statusClasses}}>
        <CompletedClass navigation={navigation} />
      </ClassroomContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
