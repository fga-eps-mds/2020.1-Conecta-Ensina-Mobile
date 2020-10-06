import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Theme from '../../../Theme';
import {UserContatiner, Icon, RegsContainer, ButtonContinuar} from './styles';

import Background3 from '../../components/Background3';
import RegFieldBig from '../../components/RegFieldBig';
import CustomText from '../../components/CustomText';

export default function RegistroUser() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //useEffect(() => console.log(password), [password]);

  return (
    <Theme>
      <Background3>
        <UserContatiner>
          <Icon source={require('../../assets/user_white.png')} />
        </UserContatiner>
        <RegsContainer>
          <RegFieldBig
            placeholder="Nome"
            onChangeText={(name) => setName(name)}
          />
          <RegFieldBig
            placeholder="Sobrenome"
            onChangeText={(surname) => setSurname(surname)}
          />
          <RegFieldBig
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
          />
          <RegFieldBig
            placeholder="Senha"
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
          />
        </RegsContainer>
        <ButtonContinuar>
          <CustomText white bigSmall>
            Continuar
          </CustomText>
        </ButtonContinuar>
      </Background3>
    </Theme>
  );
}
