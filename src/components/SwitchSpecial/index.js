import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {Container, ContainerRow} from './styles';
import {withTheme} from 'styled-components/native';
import CustomText from '../CustomText';

function SwitchAdulthood({theme, onChange, onBlur, text}) {
  const estiloOptions = [
    {label: 'Não', value: false},
    {label: 'Sim', value: true},
  ];
  const size1 = {left: '10%', right: '5%'};
  const size2 = {left: '0%', right: '10%'};
  return (
    <Container>
      <ContainerRow size={size1}>
        <CustomText white smaller>
          {text}
        </CustomText>
      </ContainerRow>
      <ContainerRow size={size2}>
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
          style={{borderColor: 'white', borderWidth: 1, borderRadius: 5}}
        />
      </ContainerRow>
    </Container>
  );
}

export default withTheme(SwitchAdulthood);
