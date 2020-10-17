import React from 'react';
import {Button} from './styles';
import CustomText from '../CustomText';
import Theme from '../../../Theme';

export default function ButtonContinuar({onPress}) {
  return (
    <Theme>
      <Button onPress={onPress}>
        <CustomText white bigSmall>
          Continuar
        </CustomText>
      </Button>
    </Theme>
  );
}
