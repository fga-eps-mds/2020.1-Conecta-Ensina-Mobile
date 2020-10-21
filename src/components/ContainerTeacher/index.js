import React from 'react';

import {Container, Imagem, ContainerTexto} from './styles';
import CustomText from '../CustomText';
import {withTheme} from 'styled-components/native';

function ContainerTeacher({data, theme}) {
  return (
    <Container>
      <Imagem source={data.photo} />
      <ContainerTexto>
        <CustomText smaller black>
          {data.cep}
        </CustomText>
      </ContainerTexto>
    </Container>
  );
}

export default withTheme(ContainerTeacher);
