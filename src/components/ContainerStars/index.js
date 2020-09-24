import React from 'react';

import {Container, Imagem, Nome} from './styles';
import {Rating} from 'react-native-ratings';

export default function ContainerStars({data}) {
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
      <Nome>{data.nome}</Nome>
    </Container>
  );
}
