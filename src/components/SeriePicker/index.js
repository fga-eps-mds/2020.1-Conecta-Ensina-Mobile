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
              label: 'Educação Infantil',
              inputLabel: 'Infantil',
              value: '0',
              color: theme.colors.preto,
            },
            {
              label: '1º Ano Ensino do Fundamental',
              inputLabel: '1º Ano EF',
              value: '1',
              color: theme.colors.preto,
            },
            {
              label: '2º Ano Ensino do Fundamental',
              inputLabel: '2º Ano EF',
              value: '2',
              color: theme.colors.preto,
            },
            {
              label: '3º Ano Ensino do Fundamental',
              inputLabel: '3º Ano EF',
              value: '3',
              color: theme.colors.preto,
            },
            {
              label: '4º Ano Ensino do Fundamental',
              inputLabel: '4º Ano EF',
              value: '4',
              color: theme.colors.preto,
            },
            {
              label: '5º Ano Ensino do Fundamental',
              inputLabel: '5º Ano EF',
              value: '5',
              color: theme.colors.preto,
            },
            {
              label: '6º Ano Ensino do Fundamental',
              inputLabel: '6º Ano EF',
              value: '6',
              color: theme.colors.preto,
            },
            {
              label: '7º Ano Ensino do Fundamental',
              inputLabel: '7º Ano EF',
              value: '7',
              color: theme.colors.preto,
            },
            {
              label: '8º Ano Ensino do Fundamental',
              inputLabel: '8º Ano EF',
              value: '8',
              color: theme.colors.preto,
            },
            {
              label: '9º Ano Ensino do Fundamental',
              inputLabel: '9º Ano EF',
              value: '9',
              color: theme.colors.preto,
            },
            {
              label: '1º Ano Ensino do Médio',
              inputLabel: '1º Ano EM',
              value: '10',
              color: theme.colors.preto,
            },
            {
              label: '2º Ano Ensino do Médio',
              inputLabel: '2º Ano EM',
              value: '11',
              color: theme.colors.preto,
            },
            {
              label: '3º Ano Ensino do Médio',
              inputLabel: '3º Ano EM',
              value: '12',
              color: theme.colors.preto,
            },
            {
              label: 'Ensino Superior',
              inputLabel: 'Superior',
              value: '13',
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
