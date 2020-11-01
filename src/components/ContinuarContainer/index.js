import React from 'react';
import CustomText from '../CustomText';

import {ButtonContainer, ButtonContinuar} from './styles';

export default function ContinuarContainer({onPress, children, marginTop}) {
  return (
    <ButtonContainer marginTop={marginTop}>
      <ButtonContinuar onPress={onPress}>
        <CustomText white bigSmall>
          {children}
        </CustomText>
      </ButtonContinuar>
    </ButtonContainer>
  );
}
