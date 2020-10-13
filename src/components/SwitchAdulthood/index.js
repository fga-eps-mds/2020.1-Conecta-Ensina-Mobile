import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {Container} from './styles';
import {withTheme} from 'styled-components/native';
import CustomText from '../CustomText';

function SwitchAdulthood({theme, onChange, onBlur}) {
  const estiloOptions = [
    {label: 'Não', value: false},
    {label: 'Sim', value: true},
  ];
  return (
    <Container>
      <CustomText white smaller>
        Adulto
      </CustomText>
      <SwitchSelector
        options={estiloOptions}
        initial={0}
        onPress={(value) => onChange(value)}
        textColor={theme.colors.fundoAzul}
        selectedColor={theme.colors.preto}
        buttonColor={theme.colors.branco}
        borderColor={theme.colors.branco}
        backgroundColor={theme.colors.fundoAzul}
        borderRadius={5}
        buttonMargin={1}
        height={20}
        fontSize={12}
        onBlur={onBlur}
      />
    </Container>
  );
}

export default withTheme(SwitchAdulthood);
