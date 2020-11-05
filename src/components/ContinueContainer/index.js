import React from 'react';
import CustomText from '../CustomText';

import {ButtonContainer, Button} from './styles';

export default function ContinueContainer({onPress, marginTop}) {
  return (
    <ButtonContainer marginTop={marginTop}>
      <Button onPress={onPress}>
        <CustomText white bigSmall>
          Continuar
        </CustomText>
      </Button>
    </ButtonContainer>
  );
}
