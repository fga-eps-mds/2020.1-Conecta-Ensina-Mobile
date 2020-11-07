import React from 'react';
import {BlueContainer, WhiteContainer, Logo, ButtonRegistrar} from './styles';
import CustomText from '../CustomText';
import Theme from '../../../Theme';

export default function Background3({children, navigation, student}) {
  return (
    <Theme>
      <BlueContainer>
        <Logo source={require('../../assets/logo.png')} />
        <WhiteContainer>{children}</WhiteContainer>
        {student && (
          <ButtonRegistrar
            onPress={() => navigation.navigate('TeacherRegister')}>
            <CustomText white small>
              Seja Professor
            </CustomText>
          </ButtonRegistrar>
        )}
      </BlueContainer>
    </Theme>
  );
}
