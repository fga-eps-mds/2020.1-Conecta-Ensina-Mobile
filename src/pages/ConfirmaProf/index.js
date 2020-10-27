import React, {useState} from 'react';
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {Container, ContainerGrande, ContainerButton, Button} from './styles';

export default function ConfirmaProf({route, navigation}) {
  const {item} = route.params;

  const handleSubmit = async () => {
    const settings = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 1,
      }),
    };
    const fetchResponse1 = await fetch(
      'http://192.168.0.12:3333/api/student/status/' + item.id,
      settings,
    );
    try {
      const data = await fetchResponse1.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getProfessoUser = async () => {
    const fetchResponse = await fetch(
      'http://192.168.0.12:3333/api/user/' + item.id,
    );
    try {
      const data = await fetchResponse.json();
      console.log(data.data.user);
      setUsers(data.data.user);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [users, setUsers] = useState(getProfessoUser);

  const getProfessor = async () => {
    const fetchResponse = await fetch(
      'http://192.168.0.12:3333/api/teacher/' + item.id,
    );
    try {
      const data = await fetchResponse.json();
      console.log(data.data.teacher);
      setTeachers(data.data.teacher);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [teachers, setTeachers] = useState(getProfessor);

  return (
    <Theme>
      <Background1>
        <Container>
          <ContainerGrande>
            <CustomText white>{users.firstName}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{users.lastName}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{users.email}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{users.cellphone}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{teachers.description}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{item.institution}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{teachers.degree}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{teachers.graduation_area}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{teachers.video}</CustomText>
          </ContainerGrande>
        </Container>
        <ContainerButton>
          <Button onPress={handleSubmit}>
            <CustomText white bigSmall>
              Aceitar
            </CustomText>
          </Button>
          <Button onPress={() => navigation.navigate('ProfessoresPendente')}>
            <CustomText white bigSmall>
              Recusar
            </CustomText>
          </Button>
        </ContainerButton>
      </Background1>
    </Theme>
  );
}
