import React from 'react';

import {Container, Imagem, ContainerTexto} from './styles';
import {Rating} from 'react-native-ratings';
import CustomText from '../CustomText';
import {withTheme} from 'styled-components/native';

function ContainerStars({img, data, theme}) {
  return (
    <Container>
      <Imagem source={img} />
      <Rating
        type="custom"
        ratingCount={5}
        imageSize={9}
        style={{paddingTop: 8}}
        tintColor={theme.colors.cinzaClaro}
      />
      <ContainerTexto>
        <CustomText smaller black>
          {data.firstName}
        </CustomText>
      </ContainerTexto>
    </Container>
  );
}

export default withTheme(ContainerStars);
