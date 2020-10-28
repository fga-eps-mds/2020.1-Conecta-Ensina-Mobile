import React, {useState, useContext} from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomText from '../../components/CustomText';
import RegFieldBig from '../../components/RegFieldBig';
import {AuthContext} from '../../contexts/auth';
import {
  LoginContainer,
  Container,
  ButtonEntrar,
  Link,
  LinkTexto,
  Logo,
  UserContatiner,
  Icon,
} from './styles';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Theme>
      <Background2
        blue={<Logo testID="Logo" source={require('../../assets/logo.png')} />}
        white={
          <Container>
            <LoginContainer>
              <UserContatiner>
                <Icon
                  testID="Icon"
                  source={require('../../assets/user_white.png')}
                />
              </UserContatiner>
              <RegFieldBig
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <RegFieldBig
                placeholder="Senha"
                autoCapitalize="none"
                value={password}
                onChangeText={(text) => setPassword(text)}
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
          </Container>
        }
      />
    </Theme>
  );
}
