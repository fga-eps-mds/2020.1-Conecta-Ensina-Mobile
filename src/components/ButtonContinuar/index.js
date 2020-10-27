import React from 'react';
import {Button} from './styles';
import CustomText from '../CustomText';

export default function ButtonContinuar({onPress, children}) {
  return (
    <Button onPress={onPress}>
      <CustomText white bigSmall>
        {children}
      </CustomText>
    </Button>
  );
}
