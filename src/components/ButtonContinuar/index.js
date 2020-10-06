import React from 'react';
import {Container} from './styles';
import CustomText from '../CustomText';

export default function ButtonContinuar({onPress}) {
  return (
    <Container onPress={onPress}>
      <CustomText white bigSmall>
        Continuar
      </CustomText>
    </Container>
  );
}
