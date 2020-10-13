import React from 'react';
import {Button} from './styles';
import CustomText from '../CustomText';

export default function ButtonContinuar({onPress}) {
  return (
    <Button onPress={onPress}>
      <CustomText white bigSmall>
        Continuar
      </CustomText>
    </Button>
  );
}
