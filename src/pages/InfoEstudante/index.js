import React from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import ContainerVoltar from '../../components/ContainerVoltar';
import {ListInfo, Container, ContainerFooter} from './styles';

export default function InfoEstudante() {
  return (
    <Theme>
      <Background1>
        <Container />
        <ContainerFooter>
          <ContainerVoltar />
        </ContainerFooter>
      </Background1>
    </Theme>
  );
}
