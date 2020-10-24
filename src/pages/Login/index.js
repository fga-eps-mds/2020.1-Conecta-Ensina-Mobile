import React, {useState, useEffect, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomText from '../../components/CustomText';
import {AuthContext} from '../../contexts/auth';
import {
  LoginContainer,
  ButtonAluno,
  ButtonProfessor,
  Container,
  ButtonEntrar,
  Link,
  LinkTexto,
  Logo,
  UserContatiner,
  Icon,
} from './styles';

export default function Login({navigation}) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [background1, setBackground1] = useState(null);
  const [background2, setBackground2] = useState(null);
  const {userSelected} = useContext(AuthContext);

  useEffect(() => {
    if (selectedButton === 'Aluno') {
      setBackground1(theme.colors.cinzaClaro);
      setBackground2(theme.colors.fundoAzul);
    } else if (selectedButton === 'Professor') {
      setBackground1(theme.colors.fundoAzul);
      setBackground2(theme.colors.cinzaClaro);
    } else if (selectedButton === null) {
      setBackground1(theme.colors.fundoAzul);
      setBackground2(theme.colors.fundoAzul);
    }
  }, [selectedButton]);

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
                <LinkTexto onPress={() => navigation.navigate('RegistroAluno')}>
                  Registre-se
                </LinkTexto>
              </Link>
              <ButtonEntrar onPress={() => userSelected(selectedButton)}>
                <CustomText white medium>
                  Entrar
                </CustomText>
              </ButtonEntrar>
            </LoginContainer>
            <ButtonAluno
              onPress={() => {
                setSelectedButton('Aluno');
              }}
              style={{backgroundColor: background1}}>
              <CustomText white medium>
                Aluno
              </CustomText>
            </ButtonAluno>
            <ButtonProfessor
              onPress={() => {
                setSelectedButton('Professor');
              }}
              style={{backgroundColor: background2}}>
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
