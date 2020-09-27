import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Container, PickerView} from './styles';
import CustomText from '../CustomText';
import {withTheme} from 'styled-components';

function HorarioPicker({onChange, theme}) {
  return (
    <Container>
      <CustomText black smallMedium>
        horário
      </CustomText>
      <PickerView>
        <RNPickerSelect
          onValueChange={(tipo) => onChange(tipo)}
          items={[
            {label: '19', value: '1', color: theme.colors.cinzaEscuro},
            {label: '18', value: '2', color: theme.colors.cinzaEscuro},
            {label: '17', value: '3', color: theme.colors.cinzaEscuro},
          ]}
          style={{
            inputAndroid: {
              color: theme.colors.cinzaClaro
            }
          }}
        />
      </PickerView>
    </Container>
  );
}

export default withTheme(HorarioPicker);
