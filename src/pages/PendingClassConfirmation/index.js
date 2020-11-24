import React, {useState, useContext} from 'react';
import {AuthContext} from '../../contexts/auth'
import Theme from '../../../Theme';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {
  Container,
  ContainerGrande,
  ContainerButton,
  ButtonConfirmar,
  ButtonRecusar,
  ContainerComplain,
  ComplainButton,
  InfoContainer,S
} from './styles';
import { StudentContext } from '../../contexts/student';

export default function PendingClassConfirmation({route, navigation}) {
  const {item} = route.params;
  
  const {Host} = useContext(AuthContext);
  const {getStudent2} = useContext(StudentContext)

  const getStudent = async () => {
    const fetchResponse = await fetch(
      Host+'/api/student/' + item.student,
    );
    try {
      const data = await fetchResponse.json();
      setStudent(data.data.student);
      return data;
    } catch (error) {
      return error;
    }
  };

  const [student, setStudent] = useState(getStudent);
  const params = student.id;

  const getUser = async () => {
    const fetchResponse = await fetch(
      Host+'/api/user/' + item.student,
    );
    try {
      const data = await fetchResponse.json();
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
      Host+'/api/classroom/status/' + id,
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
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <Container>
          <InfoContainer>
            <ContainerGrande>
              <CustomText white> Data: {item.dtclass}</CustomText>
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
            <ContainerComplain>
              <ComplainButton onPress={async()=>{
                await getStudent2(student.id)
                navigation.navigate('FeedbackTeacher', {params})
                }}>
                <CustomText white>
                  Reportar
                </CustomText>
              </ComplainButton>
            </ContainerComplain>  
          </InfoContainer>
        </Container>
        <ContainerButton>
          <ButtonConfirmar
            onPress={() => {
              updateStatus(item.id, 1);
              navigation.navigate('PendingClass');
            }}>
            <CustomText white bigSmall>
              Aceitar
            </CustomText>
          </ButtonConfirmar>
          <ButtonRecusar
            onPress={() => {
              updateStatus(item.id, -1);
              navigation.navigate('PendingClass');
            }}>
            <CustomText white bigSmall>
              Recusar
            </CustomText>
          </ButtonRecusar>
        </ContainerButton>
      </Background1>
    </Theme>
  );
}
