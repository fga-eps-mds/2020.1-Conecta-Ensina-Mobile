import React from 'react';

import {Container, Imagem, ContainerTexto} from './styles';
import {Rating} from 'react-native-ratings';
import CustomText from '../CustomText';
import {withTheme} from 'styled-components';

function ContainerStars({data, theme}) {
  return (
    <Container>
      <Imagem source={data.img} />
      <Rating
        type="custom"
        ratingCount={5}
        imageSize={9}
        style={{paddingTop: 8}}
        tintColor={theme.colors.cinzaClaro}
      />
      <ContainerTexto>
        <CustomText smaller black>
          {data.nome}
        </CustomText>
      </ContainerTexto>
    </Container>
  );
}

export default withTheme(ContainerStars);
