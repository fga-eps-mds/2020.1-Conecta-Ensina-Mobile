import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Container, PickerView} from './styles';
import {withTheme} from 'styled-components/native';

function SeriePicker(props) {
  const placeholderDuration = {
    label: 'Duração',
    value: null,
    color: props.theme.colors.preto,
  };

  const placeholderGrade = {
    label: 'Serie',
    value: null,
    color: props.theme.colors.preto,
  };

  const placeholderTime = {
    label: 'Hora',
    value: null,
    color: props.theme.colors.preto,
  };

  const durationItems = [
    {
      label: '1 Hora',
      value: '1',
      color: props.theme.colors.cinzaEscuro,
    },
    {
      label: '2 Horas',
      value: '2',
      color: props.theme.colors.cinzaEscuro,
    },
    {
      label: '3 Horas',
      value: '3',
      color: props.theme.colors.cinzaEscuro,
    },
  ];

  const timeItems = [
    {label: '19', value: '1', color: props.theme.colors.cinzaEscuro},
    {label: '18', value: '2', color: props.theme.colors.cinzaEscuro},
    {label: '17', value: '3', color: props.theme.colors.cinzaEscuro},
  ];

  const gradeItems = [
    {
      label: 'Educação Infantil',
      inputLabel: 'Infantil',
      value: '0',
      color: props.theme.colors.preto,
    },
    {
      label: '1º Ano do Ensino Fundamental',
      inputLabel: '1º Ano EF',
      value: '1',
      color: props.theme.colors.preto,
    },
    {
      label: '2º Ano do Ensino Fundamental',
      inputLabel: '2º Ano EF',
      value: '2',
      color: props.theme.colors.preto,
    },
    {
      label: '3º Ano do Ensino Fundamental',
      inputLabel: '3º Ano EF',
      value: '3',
      color: props.theme.colors.preto,
    },
    {
      label: '4º Ano do Ensino Fundamental',
      inputLabel: '4º Ano EF',
      value: '4',
      color: props.theme.colors.preto,
    },
    {
      label: '5º Ano do Ensino Fundamental',
      inputLabel: '5º Ano EF',
      value: '5',
      color: props.theme.colors.preto,
    },
    {
      label: '6º Ano do Ensino Fundamental',
      inputLabel: '6º Ano EF',
      value: '6',
      color: props.theme.colors.preto,
    },
    {
      label: '7º Ano do Ensino Fundamental',
      inputLabel: '7º Ano EF',
      value: '7',
      color: props.theme.colors.preto,
    },
    {
      label: '8º Ano do Ensino Fundamental',
      inputLabel: '8º Ano EF',
      value: '8',
      color: props.theme.colors.preto,
    },
    {
      label: '9º Ano do Ensino Fundamental',
      inputLabel: '9º Ano EF',
      value: '9',
      color: props.theme.colors.preto,
    },
    {
      label: 'Ensino Fundamental Completo',
      inputLabel: 'EF Completo',
      value: '10',
      color: props.theme.colors.preto,
    },
    {
      label: '1º Ano do Ensino Médio',
      inputLabel: '1º Ano EM',
      value: '11',
      color: props.theme.colors.preto,
    },
    {
      label: '2º Ano do Ensino Médio',
      inputLabel: '2º Ano EM',
      value: '12',
      color: props.theme.colors.preto,
    },
    {
      label: '3º Ano do Ensino Médio',
      inputLabel: '3º Ano EM',
      value: '13',
      color: props.theme.colors.preto,
    },
    {
      label: 'Ensino Médio Completo',
      inputLabel: 'EM Completo',
      value: '14',
      color: props.theme.colors.preto,
    },
    {
      label: 'Ensino Superior Incomplento',
      inputLabel: 'ES Imcompleto',
      value: '15',
      color: props.theme.colors.preto,
    },
    {
      label: 'Bacharelado/Licensiatura Completo',
      inputLabel: 'Bacharelado',
      value: '16',
      color: props.theme.colors.preto,
    },
    {
      label: 'Pós-graduação Incompleta',
      inputLabel: 'Pós-grad Incomp',
      value: '17',
      color: props.theme.colors.preto,
    },
    {
      label: 'Pós-graduação completa',
      inputLabel: 'Pós-grad',
      value: '18',
      color: props.theme.colors.preto,
    },
    {
      label: 'Mestrado Incompleto',
      inputLabel: 'Mestrado In',
      value: '19',
      color: props.theme.colors.preto,
    },
    {
      label: 'Mestrado',
      inputLabel: 'Mestrado',
      value: '20',
      color: props.theme.colors.preto,
    },
  ];

  return (
    <Container grade={props.grade} time={props.time} duration={props.duration}>
      <PickerView>
        <RNPickerSelect
          onValueChange={(tipo) => props.onChange(tipo)}
          onBlur={props.onBlur}
          useNativeAndroidPickerStyle={false}
          placeholder={
            props.grade
              ? placeholderGrade
              : props.duration
              ? placeholderDuration
              : props.time
              ? placeholderTime
              : null
          }
          items={
            props.grade
              ? gradeItems
              : props.duration
              ? durationItems
              : props.time
              ? timeItems
              : null
          }
          style={{
            inputAndroid: {
              color: props.theme.colors.branco,
              fontSize: 12,
            },
            placeholder: {
              color: props.theme.colors.branco,
              fontSize: 12,
            },
          }}
        />
      </PickerView>
    </Container>
  );
}

export default withTheme(SeriePicker);
