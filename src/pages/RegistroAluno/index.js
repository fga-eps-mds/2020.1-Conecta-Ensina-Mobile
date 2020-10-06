import React, {useState, useEffect} from 'react';
import Theme from '../../../Theme';
import {
  UserContatiner,
  Icon,
  RegsContainer,
  ButtonContinuar,
  ContainerRowFlex,
} from './styles';

import {View} from 'react-native';

import Background3 from '../../components/Background3';
import RegFieldBig from '../../components/RegFieldBig';
import RegFieldMedium from '../../components/RegFieldMedium';
import RegFieldSmall from '../../components/RegFieldSmall';
import CustomText from '../../components/CustomText';

export default function RegistroAluno() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');
  const [school, setSchool] = useState('');
  const [adulthood, setAdulthood] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [num, setNum] = useState('');
  const [details, setDetails] = useState('');
  const [special, setSpecial] = useState('');

  //useEffect(() => console.log(password), [password]);

  return (
    <Theme>
      <Background3>
        <UserContatiner>
          <Icon source={require('../../assets/user_white.png')} />
        </UserContatiner>
        <RegsContainer>
          <View>
            <RegFieldBig
              placeholder="Nome"
              onChangeText={(name) => setName(name)}
            />
          </View>
          <View>
            <RegFieldBig
              placeholder="Sobrenome"
              onChangeText={(surname) => setSurname(surname)}
            />
          </View>
          <View>
            <RegFieldBig
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View>
            <RegFieldBig
              placeholder="Senha"
              autoCapitalize="none"
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <ContainerRowFlex>
            <RegFieldSmall
              placeholder="Serie"
              autoCapitalize="none"
              onChangeText={(grade) => setGrade(grade)}
            />
            <RegFieldMedium
              placeholder="Instituição"
              autoCapitalize="none"
              onChangeText={(school) => setSchool(school)}
            />
          </ContainerRowFlex>
          <ContainerRowFlex>
            <RegFieldSmall
              placeholder="Adulto?"
              onChangeText={(adulthood) => setAdulthood(adulthood)}
            />
            <RegFieldMedium
              placeholder="CPF"
              onChangeText={(cpf) => setCpf(cpf)}
            />
          </ContainerRowFlex>
          <ContainerRowFlex>
            <RegFieldMedium
              placeholder="CEP"
              onChangeText={(cep) => setCep(cep)}
            />
            <RegFieldSmall
              placeholder="Nº"
              onChangeText={(num) => setNum(num)}
            />
          </ContainerRowFlex>
          <View>
            <RegFieldBig
              placeholder="Complemento"
              onChangeText={(details) => setDetails(details)}
            />
          </View>
          <View>
            <RegFieldBig
              placeholder="Necessidades Especiais"
              autoCapitalize="none"
              onChangeText={(special) => setSpecial(special)}
            />
          </View>
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
