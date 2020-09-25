import React from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import {
  LoginContainer,
  ButtonAluno,
  Texto,
  ButtonProfessor,
  Container,
  ButtonEntrar,
  Link,
  LinkTexto,
  Logo,
  UserContatiner,
  Icon,
} from './styles';

export default function Login() {
  return (
    <Theme>
      <Background2
        blue={<Logo source={require('../../assets/logo.png')} />}
        white={
          <Container>
            <LoginContainer>
              <UserContatiner>
                <Icon source={require('../../assets/user_white.png')} />
              </UserContatiner>
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
        }
      />
    </Theme>
  );
}
