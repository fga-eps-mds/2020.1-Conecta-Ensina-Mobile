import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {Container} from './styles';
import {withTheme} from 'styled-components/native';

function SwitchFilter({theme, onChange}) {
  const estiloOptions = [
    {label: 'Online', value: 'Online'},
    {label: 'Presencial', value: 'Presencial'},
  ];
  return (
    <Container>
      <SwitchSelector
        options={estiloOptions}
        initial={0}
        value={0}
        onPress={(value) => onChange(value)}
        textColor={theme.colors.preto}
        selectedColor={theme.colors.branco}
        buttonColor={theme.colors.vermelho}
        borderRadius={10}
        buttonMargin={3}
        height={43}
        fontSize={12}
      />
    </Container>
  );
}

export default withTheme(SwitchFilter);
