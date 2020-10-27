import React, {useState, useEffect, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomText from '../../components/CustomText';
<<<<<<< HEAD
import {AuthContext} from '../../contexts/auth';
=======
import RegFieldBig from '../../components/RegFieldBig';
import {AuthContext} from '../../contexts/auth'
>>>>>>> 2e5b79381e511676b1eacc73f6c6f9b5bf94b2d7
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
  ButtonAdm,
} from './styles';

export default function Login({navigation}) {
<<<<<<< HEAD
  const [selectedButton, setSelectedButton] = useState(null);
  const [background1, setBackground1] = useState(null);
  const [background2, setBackground2] = useState(null);
  const [background3, setBackground3] = useState(null);
  const {userSelected} = useContext(AuthContext);

  useEffect(() => {
    if (selectedButton === 'Aluno') {
      setBackground1(theme.colors.cinzaClaro);
      setBackground2(theme.colors.fundoAzul);
      setBackground3(theme.colors.fundoAzul);
    } else if (selectedButton === 'Professor') {
      setBackground1(theme.colors.fundoAzul);
      setBackground2(theme.colors.cinzaClaro);
      setBackground3(theme.colors.fundoAzul);
    } else if (selectedButton === 'Adm') {
      setBackground1(theme.colors.fundoAzul);
      setBackground2(theme.colors.fundoAzul);
      setBackground3(theme.colors.cinzaClaro);
    } else if (selectedButton === null) {
      setBackground1(theme.colors.fundoAzul);
      setBackground2(theme.colors.fundoAzul);
      setBackground3(theme.colors.fundoAzul);
    }
  }, [selectedButton]);

=======
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signIn} = useContext(AuthContext);

  function handleLogin(){
    signIn(email, password)
  }
  
>>>>>>> 2e5b79381e511676b1eacc73f6c6f9b5bf94b2d7
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
              <RegFieldBig
                    placeholder="Email"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={ (text) => setEmail(text) }
              />
              <RegFieldBig
                    placeholder="Senha"
                    autoCapitalize="none"
                    value={password}
                    onChangeText={ (text) => setPassword(text) }
                    secureTextEntry={true}
              />
              <ButtonEntrar onPress={handleLogin}>
                <CustomText white medium>
                  Entrar
                </CustomText>
              </ButtonEntrar>
              <Link>
                <LinkTexto onPress={() => navigation.navigate('RegistroAluno')}>
                  Registre-se
                </LinkTexto>
              </Link>
            </LoginContainer>
<<<<<<< HEAD
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
            <ButtonAdm
              onPress={() => {
                setSelectedButton('Adm');
              }}
              style={{backgroundColor: background3}}>
              <CustomText white medium>
                Adm
              </CustomText>
            </ButtonAdm>
=======
>>>>>>> 2e5b79381e511676b1eacc73f6c6f9b5bf94b2d7
          </Container>
        }
      />
    </Theme>
  );
}
