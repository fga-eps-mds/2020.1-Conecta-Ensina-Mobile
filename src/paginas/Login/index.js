import React from 'react';
import Theme from '../../../Theme';
import {
  WhiteContainer,
  BlueContainer,
} from '../../components/styleBackground2/styles';

import {LoginContainer, ButtonAluno, Texto, ButtonProfessor} from './styles';

export default function Login() {
  return (
    <Theme>
      <BlueContainer />
      <WhiteContainer>
        <ButtonAluno>
          <Texto>Aluno</Texto>
        </ButtonAluno>
        <ButtonProfessor>
          <Texto>Professor</Texto>
        </ButtonProfessor>
      </WhiteContainer>
      <LoginContainer />
    </Theme>
  );
}
