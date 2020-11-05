import React, {useState} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {
  Container,
  ContainerGrande,
  ContainerButton,
  ButtonConfirmar,
  ButtonRecusar,
} from './styles';

export default function ConfirmaProf({route, navigation}) {
  const {item} = route.params;

  const getStudent = async () => {
    const fetchResponse = await fetch(
      'http://192.168.0.12:3333/api/student/' + item.student,
    );
    try {
      const data = await fetchResponse.json();
      console.log(data.data.student);
      setStudent(data.data.student);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [student, setStudent] = useState(getStudent);

  const getUser = async () => {
    const fetchResponse = await fetch(
      'http://192.168.0.12:3333/api/user/' + item.student,
    );
    try {
      const data = await fetchResponse.json();
      console.log(data.data.user);
      setUser(data.data.user);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [user, setUser] = useState(getUser);

  const updateStatus = async (id, status) => {
    const settings = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: status,
      }),
    };
    const fetchResponse1 = await fetch(
      'http://192.168.0.12:3333/api/classroom/status/' + id,
      settings,
    );
    try {
      const data = await fetchResponse1.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Theme>
      <Background1 navigation={navigation} page={'PerfilProf2'}>
        <Container>
          <ContainerGrande>
            <CustomText white> Data: {item.dtClass}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>Distância: {student.cep}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>Duração: {item.duration}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>Matéria: {item.subject}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              Nome: {user.firstName + ' ' + user.lastName}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>Instituição: {student.institution}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>Série: {student.grade}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>Especial: {student.special}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>Descrição: {student.description}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>Detalhe:{student.details}</CustomText>
          </ContainerGrande>
        </Container>
        <ContainerButton>
          <ButtonConfirmar onPress={() => updateStatus(item.id, 1)}>
            <CustomText white bigSmall>
              Aceitar
            </CustomText>
          </ButtonConfirmar>
          <ButtonRecusar onPress={() => updateStatus(item.id, -1)}>
            <CustomText white bigSmall>
              Recusar
            </CustomText>
          </ButtonRecusar>
        </ContainerButton>
      </Background1>
    </Theme>
  );
}
