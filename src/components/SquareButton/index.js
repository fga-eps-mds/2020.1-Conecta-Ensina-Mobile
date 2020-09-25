import React from 'react';
import CustomText from '../CustomText';
import {Container, Imagem, Nome} from './styles';

export default function SquareButton({data}) {
  return (
    <Container>
      <Imagem source={data.img} />
      <Nome>
        <CustomText black smaller>
          {data.nome}
        </CustomText>
      </Nome>
    </Container>
  );
}
