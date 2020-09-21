import React from 'react';
import Theme from '../../../Theme';
import {
  WhiteContainer,
  BlueContainer,
} from '../../components/StyleBackground2/styles';

import {LoginContainer, ButtonAluno, Texto, ButtonProfessor, Container, ButtonEntrar, Link, LinkTexto, Logo} from './styles';

export default function Login() {
  return (
    <Theme>
      <BlueContainer>
        <WhiteContainer>
        <Logo source={require("../../assets/logo.png")} />
        <Container>
          <LoginContainer>
            <Link>
              <LinkTexto>Registre-se</LinkTexto>
            </Link>
            <ButtonEntrar>
              <Texto>Entrar</Texto>
            </ButtonEntrar>
          </LoginContainer>  
          <ButtonAluno>
            <Texto>Aluno</Texto>
          </ButtonAluno>
          <ButtonProfessor>
            <Texto>Professor</Texto>
          </ButtonProfessor> 
        </Container>

        </WhiteContainer>
      </BlueContainer>
     
    </Theme>
  );
}
