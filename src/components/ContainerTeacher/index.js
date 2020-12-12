import React from 'react';

import {Container, Imagem, ContainerTexto} from './styles';
import CustomText from '../CustomText';
import {withTheme} from 'styled-components/native';

function ContainerTeacher({data, onPressProf}) {
  return (
    <Container testID="ContainerTeacher" onPress={onPressProf}>
      <Imagem />
      <ContainerTexto>
        <CustomText smaller black>
          {data.firstName + ' ' + data.lastName}
        </CustomText>
      </ContainerTexto>
    </Container>
  );
}

export default withTheme(ContainerTeacher);
