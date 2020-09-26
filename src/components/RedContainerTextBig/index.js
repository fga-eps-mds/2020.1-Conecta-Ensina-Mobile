import React from 'react';
import {ContainerTexto, RedContainer} from './styles';
import CustomText from '../CustomText';

export default function RedContainerTextBig({children}) {
  return (
    <RedContainer>
      <ContainerTexto>
        <CustomText white small>
          {children}
        </CustomText>
      </ContainerTexto>
    </RedContainer>
  );
}
