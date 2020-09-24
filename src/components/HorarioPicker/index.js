import React from 'react';
import RNPickerSelect from 'react-native-picker-select'
import { Container, Texto, PickerView } from './styles'

export default function HorarioPicker({onChange}) {
 return (
    <Container>
        <Texto>Horário</Texto>
        <PickerView>
        <RNPickerSelect
        onValueChange={ (tipo) => onChange(tipo) }
        items={[
                {label: '19', value: '1', color: '#596C7C'},
                {label: '18', value: '2', color: '#596C7C'},
                {label: '17', value: '3', color: '#596C7C'},
                ]}
        />
        </PickerView>
   </Container>
  );
}