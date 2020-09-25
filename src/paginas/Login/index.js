import React from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomText from '../../components/CustomText';
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
                <CustomText white medium>
                  Entrar
                </CustomText>
              </ButtonEntrar>
            </LoginContainer>
            <ButtonAluno>
              <CustomText white medium>
                Aluno
              </CustomText>
            </ButtonAluno>
            <ButtonProfessor>
              <CustomText white medium>
                Professor
              </CustomText>
            </ButtonProfessor>
          </Container>
        }
      />
    </Theme>
  );
}
