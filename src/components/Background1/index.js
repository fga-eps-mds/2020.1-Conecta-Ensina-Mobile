import React, {useContext} from 'react';
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
import {AuthContext} from '../../contexts/auth';

export default function Background1({children, navigation, page}) {
  const {user} = useContext(AuthContext);
  return (
    <Theme>
      <BlueContainer>
        <UserContainer>
          <UserAvatar
            testID='userAvatar'
            onPress={() => {
              navigation.navigate(page, {user}); /*}catch(error){}*/
            }}>
            <UserImage source={require('../../assets/user_blue.png')} />
          </UserAvatar>
          <TextoContainer>
            <CustomText white medium>
              {user && user.firstName}
            </CustomText>
          </TextoContainer>
        </UserContainer>
        <WhiteContainer>{children}</WhiteContainer>
      </BlueContainer>
    </Theme>
  );
}
