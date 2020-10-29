import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Container, PickerView} from './styles';
import CustomText from '../CustomText';
import {withTheme} from 'styled-components/native';

function DurationPicker({onChange, theme}) {
  return (
    <Container>
      <CustomText black smallMedium>
        Duração
      </CustomText>
      <PickerView>
        <RNPickerSelect
          onValueChange={(tipo) => onChange(tipo)}
          items={[
            {
              label: '1 Hora',
              value: '1',
              color: theme.colors.cinzaEscuro,
            },
            {
              label: '2 Horas',
              value: '2',
              color: theme.colors.cinzaEscuro,
            },
            {
              label: '3 Horas',
              value: '3',
              color: theme.colors.cinzaEscuro,
            },
          ]}
          style={{
            inputAndroid: {
              color: theme.colors.preto,
            },
          }}
        />
      </PickerView>
    </Container>
  );
}

export default withTheme(DurationPicker);
