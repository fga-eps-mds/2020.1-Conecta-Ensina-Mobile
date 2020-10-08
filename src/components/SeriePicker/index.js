import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Container, PickerView} from './styles';
import {withTheme} from 'styled-components/native';

function SeriePicker({onChange, theme, onBlur}) {
  const placeholder = {label: 'Serie', value: null, color: theme.colors.preto};

  return (
    <Container>
      <PickerView>
        <RNPickerSelect
          onValueChange={(tipo) => onChange(tipo)}
          onBlur={onBlur}
          useNativeAndroidPickerStyle={false}
          placeholder={placeholder}
          items={[
            {
              label: '1º Ano',
              value: '1',
              color: theme.colors.preto,
            },
            {
              label: '2º Ano',
              value: '2',
              color: theme.colors.preto,
            },
            {
              label: '3º Ano',
              value: '3',
              color: theme.colors.preto,
            },
          ]}
          style={{
            inputAndroid: {
              color: theme.colors.branco,
              fontSize: 12,
            },
            placeholder: {
              color: theme.colors.branco,
              fontSize: 12,
            },
          }}
        />
      </PickerView>
    </Container>
  );
}

export default withTheme(SeriePicker);
