import React from 'react';
import CustomText from '../CustomText';

import {ButtonContainer, ButtonContinuar} from './styles';

export default function ContinuarContainer({onPress, marginTop}) {
  return (
    <ButtonContainer marginTop={marginTop}>
      <ButtonContinuar onPress={onPress}>
        <CustomText white bigSmall>
          Continuar
        </CustomText>
      </ButtonContinuar>
    </ButtonContainer>
  );
}
