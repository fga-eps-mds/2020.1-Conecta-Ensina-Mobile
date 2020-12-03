import React from 'react';
import { Container, Texto } from './styles';

export default function TextCard2({data}) {
 return (
   <Container>
     <Texto>{data.name}</Texto>
   </Container>
  );
}