import React from 'react';
import Theme from '../../../Theme';

import {
  BlueContainer,
  WhiteContainer,
  LoginContainer,
  ButtonAluno,
  Texto,
  ButtonProfessor,
} from './styles';

export default function Background1() {
  return (
    <Theme>
      <BlueContainer>
        <WhiteContainer style={{zIndex: 0}} />
      </BlueContainer>
    </Theme>
  );
}
