import React from 'react';

import {Container, Imagem, ContainerTexto} from './styles';
import {Rating} from 'react-native-ratings';
import CustomText from '../CustomText';

export default function SquareButton({data}) {
  return (
    <Container>
      <Imagem source={data.img} />
      <Rating
        type="custom"
        ratingCount={5}
        imageSize={9}
        style={{paddingTop: 8}}
        tintColor={'#D9D9D9'}
      />
      <ContainerTexto>
        <CustomText smaller black>
          {data.nome}
        </CustomText>
      </ContainerTexto>
    </Container>
  );
}
