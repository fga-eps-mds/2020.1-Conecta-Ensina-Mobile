import React from 'react';
import Theme, {theme} from '../../../Theme';
import {Container, Imagem, ContainerTexto} from './styles';
import {Rating} from 'react-native-ratings';
import CustomText from '../CustomText';
import {withTheme} from 'styled-components/native';

function ContainerStars({img, name, data, styleContainer, style, onPress}) {
  return (
    <Theme>
      <Container
        testID="ContainerStars"
        onPress={onPress}
        style={[styleContainer]}>
        <Imagem source={img} />
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={9}
          style={{paddingTop: 8}}
          tintColor={style}
        />
        <ContainerTexto>
          <CustomText smaller black>
            {name}
          </CustomText>
        </ContainerTexto>
      </Container>
    </Theme>
  );
}

export default withTheme(ContainerStars);
