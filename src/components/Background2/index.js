import React from 'react';
import {BlueContainer, WhiteContainer, Container} from './styles';
import Theme from '../../../Theme';

export default function Background2(props) {
  return (
    <Theme>
      <Container testID = 'background'>
        <BlueContainer>{props.blue}</BlueContainer>
        <WhiteContainer>{props.white}</WhiteContainer>
      </Container>
    </Theme>
  );
}
