import React, {useState} from 'react';

import {ButtonContainer, Imagem, Nome} from './styles';

export default function SquareButton({data,onPress,style}) {
  return (
    <ButtonContainer onPress={onPress} style={[style]}>
      <Imagem source={data.img} />
      <Nome>{data.nome}</Nome>
    </ButtonContainer>
  );
}
