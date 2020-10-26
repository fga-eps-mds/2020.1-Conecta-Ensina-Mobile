import React from 'react';
import Theme from '../../../Theme';
import CustomText from '../CustomText';
import {
  BlueContainer,
  WhiteContainer,
  TextoContainer,
  UserAvatar,
  UserImage,
  UserContainer,
} from './styles';

export default function Background1({children}) {
  return (
    <Theme>
      <BlueContainer>
        <UserContainer>
          <UserAvatar>
            <UserImage source={require('../../assets/user_blue.png')} />
          </UserAvatar>
          <TextoContainer>
            <CustomText white medium>
              Nome do Aluno
            </CustomText>
          </TextoContainer>
        </UserContainer>
        <WhiteContainer>{children}</WhiteContainer>
      </BlueContainer>
    </Theme>
  );
}
