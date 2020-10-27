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
              label: '1º Ano do Ensino Fundamental',
              inputLabel: '1º Ano EF',
              value: '1',
              color: theme.colors.preto,
            },
            {
              label: '2º Ano do Ensino Fundamental',
              inputLabel: '2º Ano EF',
              value: '2',
              color: theme.colors.preto,
            },
            {
              label: '3º Ano do Ensino Fundamental',
              inputLabel: '3º Ano EF',
              value: '3',
              color: theme.colors.preto,
            },
            {
              label: '4º Ano do Ensino Fundamental',
              inputLabel: '4º Ano EF',
              value: '4',
              color: theme.colors.preto,
            },
            {
              label: '5º Ano do Ensino Fundamental',
              inputLabel: '5º Ano EF',
              value: '5',
              color: theme.colors.preto,
            },
            {
              label: '6º Ano do Ensino Fundamental',
              inputLabel: '6º Ano EF',
              value: '6',
              color: theme.colors.preto,
            },
            {
              label: '7º Ano do Ensino Fundamental',
              inputLabel: '7º Ano EF',
              value: '7',
              color: theme.colors.preto,
            },
            {
              label: '8º Ano do Ensino Fundamental',
              inputLabel: '8º Ano EF',
              value: '8',
              color: theme.colors.preto,
            },
            {
              label: '9º Ano do Ensino Fundamental',
              inputLabel: '9º Ano EF',
              value: '9',
              color: theme.colors.preto,
            },
            {
              label: 'Ensino Fundamental Completo',
              inputLabel: 'EF Completo',
              value: '10',
              color: theme.colors.preto,
            },
            {
              label: '1º Ano do Ensino Médio',
              inputLabel: '1º Ano EM',
              value: '11',
              color: theme.colors.preto,
            },
            {
              label: '2º Ano do Ensino Médio',
              inputLabel: '2º Ano EM',
              value: '12',
              color: theme.colors.preto,
            },
            {
              label: '3º Ano do Ensino Médio',
              inputLabel: '3º Ano EM',
              value: '13',
              color: theme.colors.preto,
            },
            {
              label: 'Ensino Médio Completo',
              inputLabel: 'EM Completo',
              value: '14',
              color: theme.colors.preto,
            },
            {
              label: 'Ensino Superior Incomplento',
              inputLabel: 'ES Imcompleto',
              value: '15',
              color: theme.colors.preto,
            },
            {
              label: 'Bacharelado/Licensiatura Completo',
              inputLabel: 'Bacharelado',
              value: '16',
              color: theme.colors.preto,
            },
            {
              label: 'Pós-graduação Incompleta',
              inputLabel: 'Pós-grad Incomp',
              value: '17',
              color: theme.colors.preto,
            },
            {
              label: 'Pós-graduação completa',
              inputLabel: 'Pós-grad',
              value: '18',
              color: theme.colors.preto,
            },
            {
              label: 'Mestrado Incompleto',
              inputLabel: 'Mestrado In',
              value: '19',
              color: theme.colors.preto,
            },
            {
              label: 'Mestrado',
              inputLabel: 'Mestrado',
              value: '20',
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
