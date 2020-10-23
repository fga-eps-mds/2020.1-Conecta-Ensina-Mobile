import React, {useState, useEffect, useContext} from 'react';
import Theme, {theme} from '../../../Theme';
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
  /*const {signIn} = useContext(AuthContext); */

  /*function handleLogin(){
    signIn(email, password)
  }*/

  async function handleLogin() {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    const fetchResponse1 = await fetch(
      'http://192.168.0.8:3333/api/users/login',
      settings,
    );
    try {
      const data = await fetchResponse1.json();
      console.log('Success:', data);
      if (data.message) {
        if (data.message === 'Login efetuado com sucesso') {
          console.log('login efetuado');
          if (data.role === 2) {
            /*setTypeUser('Professor'); */
            console.log('Professor');
          } else {
            /*setTypeUser('Aluno'); */
            console.log('Aluno');
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
