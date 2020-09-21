import React from 'react';
import {Text} from 'react-native';
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
        <LoginContainer style={{zIndex: 1}} />
        <WhiteContainer style={{zIndex: 0}}>
          <ButtonAluno>
            <Texto>Aluno</Texto>
          </ButtonAluno>
          <ButtonProfessor>
            <Texto>Professor</Texto>
          </ButtonProfessor>
        </WhiteContainer>
      </BlueContainer>
    </Theme>
  );
}
