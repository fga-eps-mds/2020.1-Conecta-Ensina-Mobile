import React from 'react';
import {BlueContainer, WhiteContainer, Logo} from './styles';
import Theme from '../../../Theme';

export default function Background3(props) {
  return (
    <Theme>
      <BlueContainer>
        <Logo source={require('../../assets/logo.png')} />
        <WhiteContainer>{props.children}</WhiteContainer>
      </BlueContainer>
    </Theme>
  );
}
