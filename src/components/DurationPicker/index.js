import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Container, PickerView, Texto} from './styles';
import {CustomText} from '../CustomText';

export default function DurationPicker({onChange}) {
  return (
    <Container>
      <CustomText black smallMedium>
        Duração
      </CustomText>
      <PickerView>
        <RNPickerSelect
          onValueChange={(tipo) => onChange(tipo)}
          items={[
            {label: '1 Hora', value: '1', color: '#596C7C'},
            {label: '2 Horas', value: '2', color: '#596C7C'},
            {label: '3 Horas', value: '3', color: '#596C7C'},
          ]}
        />
      </PickerView>
    </Container>
  );
}