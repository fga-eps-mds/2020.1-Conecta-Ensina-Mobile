import React, {useState, useEffect, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomText from '../../components/CustomText';
import RegField from '../../components/RegField';
import {AuthContext} from '../../contexts/auth';
import PasswordInput from '../../components/PasswordInput';
import {FieldContainer} from '../../components/FieldContainer/styles';
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
        blue={<Logo source={require('../../assets/logo.png')} />}
        white={
          <Container>
            <LoginContainer>
              <UserContatiner>
                <Icon source={require('../../assets/user_white.png')} />
              </UserContatiner>
              <RegField
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <FieldContainer>
                <PasswordInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
              </FieldContainer>
              <ButtonEntrar onPress={handleLogin}>
                <CustomText white medium>
                  Entrar
                </CustomText>
              </ButtonEntrar>
              <Link>
                <LinkTexto
                  onPress={() => navigation.navigate('StudentRegister')}>
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
