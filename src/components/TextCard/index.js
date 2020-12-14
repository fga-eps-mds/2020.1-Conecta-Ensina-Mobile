import React from 'react';
import {Container, TextMessage} from './styles';

export default function TextCard({data}) {
  return (
    <Container>
      <TextMessage>{data.text}</TextMessage>
    </Container>
  );
}
