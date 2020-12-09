import React from 'react';
import {render} from '@testing-library/react-native';
import Maps from '../../src/pages/Maps';
import {ClassroomContext} from '../../src/contexts/classroom';

describe('Testing Maps page', () => {
  jest.mock('react-native-maps', () => {
    const {View} = require('react-native');
    const MockMapView = (props: any) => {
      return <View>{props.children}</View>;
    };
    const MockMarker = (props: any) => {
      return <View>{props.children}</View>;
    };
    return {
      __esModule: true,
      default: MockMapView,
      Marker: MockMarker,
    };
  });

  const navigation = {
    navigate: jest.fn(),
  };

  let coordenates;
  beforeEach(() => {
    coordenates = {lat: -15.8644976, lng: -48.0351302};
  });

  test('Should match snapshot', () => {
    const tree = render(
      <ClassroomContext.Provider value={{coordenates}}>
        <Maps navigation={navigation} />
      </ClassroomContext.Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
