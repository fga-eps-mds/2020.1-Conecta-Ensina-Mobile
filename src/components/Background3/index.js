import React from 'react';
import {BlueContainer, WhiteContainer, Logo} from './styles';

export default function Background3(props) {
  return (
    <BlueContainer>
      <Logo source={require('../../assets/logo.png')} />
      <WhiteContainer>{props.children}</WhiteContainer>
    </BlueContainer>
  );
}
