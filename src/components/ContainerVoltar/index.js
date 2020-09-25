import React from 'react';
import {Container, Texto, Voltar, Continuar} from './styles';

export default function ContainerVoltar({children}) {
  return (
    <Container>
      <Voltar>
        <Texto>Voltar</Texto>
      </Voltar>
      <Continuar>
        <Texto>{children}</Texto>
      </Continuar>
    </Container>
  );
}
