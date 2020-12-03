import React from 'react';
import { Container, Texto } from './styles';

export default function TextCard({data}) {
 return (
   <Container>
     <Texto>{data.name}</Texto>
   </Container>
  );
}