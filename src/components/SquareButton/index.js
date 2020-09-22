import React from 'react';

import {Container, Imagem, Nome} from './styles'

export default function SquareButton({ data }) {
 return (
   <Container>
       <Imagem source={data.img} />
       <Nome>{data.nome}</Nome>
   </Container>
  );
}