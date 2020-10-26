import React from 'react';
import {BlueContainer, WhiteContainer, Logo, ButtonRegistrar} from './styles';
import CustomText from '../CustomText';

export default function Background3({children, navigation, student}) {
  return (
    <BlueContainer>
      <Logo source={require('../../assets/logo.png')} />
      <WhiteContainer>{children}</WhiteContainer>
      {student && (
        <ButtonRegistrar
          onPress={() => navigation.navigate('RegistroProfessor')}>
          <CustomText white small>
            Seja Professor
          </CustomText>
        </ButtonRegistrar>
      )}
    </BlueContainer>
  );
}
