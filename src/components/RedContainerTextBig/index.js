import React from 'react';
import {Texto, RedContainer} from './styles';

export default function RedContainerTextBig({children}) {
  return (
    <RedContainer>
      <Texto>{children}</Texto>
    </RedContainer>
  );
}
