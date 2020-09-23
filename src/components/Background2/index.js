import React from 'react';

import {BlueContainer, WhiteContainer} from './styles';

export default function Background2({children}) {
  return (
    <BlueContainer>
      <WhiteContainer>{children}</WhiteContainer>
    </BlueContainer>
  );
}
