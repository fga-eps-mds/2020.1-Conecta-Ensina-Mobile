import React from 'react';
import {Container, Texto, Voltar, Continuar} from './styles';

export default function ContainerVoltar() {
  return (
    <Container>
      <Voltar>
        <Texto>Voltar</Texto>
      </Voltar>
      <Continuar>
        <Texto>Continuar</Texto>
      </Continuar>
    </Container>
  );
}
