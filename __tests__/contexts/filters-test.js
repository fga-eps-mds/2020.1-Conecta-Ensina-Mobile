import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {render, fireEvent, act} from '@testing-library/react-native';
import FiltersProvider, {FiltersContext} from '../../src/contexts/filters';

describe('Testing Filters Context', () => {
  const TestComponent = () => {
    const {
      setFilters,
      setSubjectFilter,
      setDtClass,
      setDurationFilters,
      setClassType,
    } = useContext(FiltersContext);

    return (
      <View>
        <TouchableOpacity testID="setFilters" onPress={() => setFilters()} />
        <TouchableOpacity
          testID="setSubjectFilter"
          onPress={() => setSubjectFilter(1)}
        />
        <TouchableOpacity
          testID="setDtClass"
          onPress={() => setDtClass(new Date())}
        />
        <TouchableOpacity
          testID="setDurationFilters"
          onPress={() => setDurationFilters('14:00')}
        />
        <TouchableOpacity
          testID="setClassType"
          onPress={() => setClassType('Presencial')}
        />
      </View>
    );
  };
  test('Should triggers setFilters', async () => {
    const {getByTestId} = render(
      <FiltersProvider>
        <TestComponent />
      </FiltersProvider>,
    );
    const button = getByTestId('setFilters');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers setSubjectFilter', async () => {
    const {getByTestId} = render(
      <FiltersProvider>
        <TestComponent />
      </FiltersProvider>,
    );
    const button = getByTestId('setSubjectFilter');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers setDurationFilters', async () => {
    const {getByTestId} = render(
      <FiltersProvider>
        <TestComponent />
      </FiltersProvider>,
    );
    const button = getByTestId('setDurationFilters');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers setDtClass', async () => {
    const {getByTestId} = render(
      <FiltersProvider>
        <TestComponent />
      </FiltersProvider>,
    );
    const button = getByTestId('setDtClass');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
  test('Should triggers setClassType', async () => {
    const {getByTestId} = render(
      <FiltersProvider>
        <TestComponent />
      </FiltersProvider>,
    );
    const button = getByTestId('setClassType');

    await act(async () => {
      await fireEvent.press(button);
    });
  });
});
