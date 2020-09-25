import React from 'react';
import {Texto, RedContainer} from './styles';

export default function RedContainerTextSmall({children}) {
  return (
    <RedContainer>
      <Texto>{children}</Texto>
    </RedContainer>
  );
}
