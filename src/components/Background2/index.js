import React from 'react';
import {BlueContainer, WhiteContainer, Container} from './styles';

export default function Background2(props) {
  return (
    <Container>
      <BlueContainer>{props.blue}</BlueContainer>
      <WhiteContainer>{props.white}</WhiteContainer>
    </Container>
  );
}
