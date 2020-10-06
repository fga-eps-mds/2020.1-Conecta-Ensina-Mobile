import React from 'react';
import {Container, Voltar, Continuar, Pular} from './styles';
import CustomText from '../CustomText';
import Theme from '../../../Theme';
export default function ContainerVoltar({onPressContinuar, onPressVoltar}) {
  return (
    <Theme>
      <Container>
        <Voltar
          onPress={onPressVoltar}>
          <CustomText white small>
            Voltar
          </CustomText>
        </Voltar>
        <Continuar
         onPress={onPressContinuar}>
          <CustomText white small>
            Continuar
          </CustomText>
        </Continuar>
        <Pular>
          <CustomText white small>
            Pular
          </CustomText>
        </Pular>
      </Container>
    </Theme>
  );
}
