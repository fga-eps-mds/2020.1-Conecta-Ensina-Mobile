import React, {useState, useEffect, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomText from '../../components/CustomText';
import RegField from '../../components/RegField';
import {AuthContext} from '../../contexts/auth';
import {TextInput} from 'react-native';
import {DateContainer} from '../RegistroAluno/styles';
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
              <DateContainer>
                <TextInput
                  placeholder="Senha"
                  autoCapitalize="none"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  placeholderTextColor="#F6F6F6"
                  style={{
                    color: '#FFFFFF',
                    fontSize: 14,
                    flex: 1,
                    textAlign: 'center',
                  }}
                />
              </DateContainer>
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
