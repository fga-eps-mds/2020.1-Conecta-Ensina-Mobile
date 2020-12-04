import React from 'react';
import CustomText from '../CustomText';
import {Container, Imagem, Nome} from './styles';

export default function SquareButton({img, data, onPress, style}) {
  return (
    <Container testID="SquareButton" onPress={onPress} style={[style]}>
      <Imagem source={img} />
      <Nome>
        <CustomText black smaller>
          {data.name}
        </CustomText>
      </Nome>
    </Container>
  );
}
