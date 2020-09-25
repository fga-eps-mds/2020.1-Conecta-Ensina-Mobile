import React from 'react';
import {Container, Voltar, Continuar} from './styles';
import CustomText from '../CustomText';
import Theme from '../../../Theme';
export default function ContainerVoltar(props) {
  return (
    <Theme>
      <Container>
        <Voltar>
          <CustomText white small>
            Voltar
          </CustomText>
        </Voltar>
        <Continuar>
          <CustomText white small>
            Continuar
          </CustomText>
        </Continuar>
      </Container>
    </Theme>
  );
}
