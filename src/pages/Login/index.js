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
  UserContainer,
} from './styles';

export default function Login({navigation}) {
  return (
    <Theme>
      <Background2>
        <Logo source={require('../../assets/logo.png')} />
        <Container>
          <LoginContainer>
            <UserContainer />
            <Link>
              <LinkTexto>Registre-se</LinkTexto>
            </Link>
            <ButtonEntrar onPress = {() => navigation.navigate('Home')}>
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
      </Background2>
    </Theme>
  );
}
