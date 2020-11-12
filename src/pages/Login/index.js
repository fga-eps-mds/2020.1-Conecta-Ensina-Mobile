import React, {useState, useContext} from 'react';
import Theme from '../../../Theme';
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
              <RegField
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <FieldContainer>
                <PasswordInput
                  testID="password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                />
              </FieldContainer>
              <ButtonEntrar testID="signIn" onPress={handleLogin}>
                <CustomText white medium>
                  Entrar
                </CustomText>
              </ButtonEntrar>
              <Link
                testID="signUp"
                onPress={() => navigation.navigate('StudentRegister')}>
                <LinkTexto>Registre-se</LinkTexto>
              </Link>
            </LoginContainer>
          </Container>
        }
      />
    </Theme>
  );
}
