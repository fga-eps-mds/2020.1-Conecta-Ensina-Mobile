import React, {useContext} from 'react';
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
  InfoContainer,
} from './styles';
import {StudentContext} from '../../contexts/student';
import {ClassroomContext} from '../../contexts/classroom';

export default function PendingClassConfirmation({route, navigation}) {
  const {item} = route.params;
  const {getStudent, student} = useContext(StudentContext);
  const {updateStatusClasses} = useContext(ClassroomContext);
  const params = student.id;

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
                Nome: {student.User.firstName + ' ' + student.User.lastName}
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
              <ComplainButton
                testID="Reportar"
                onPress={async () => {
                  await getStudent(student.id);
                  navigation.navigate('FeedbackTeacher', {params});
                }}>
                <CustomText white>Reportar</CustomText>
              </ComplainButton>
            </ContainerComplain>
          </InfoContainer>
        </Container>
        <ContainerButton>
          <ButtonConfirmar
            testID="Aceitar"
            onPress={() => {
              updateStatusClasses(item.id, 1);
              navigation.navigate('PendingClass');
            }}>
            <CustomText white bigSmall>
              Aceitar
            </CustomText>
          </ButtonConfirmar>
          <ButtonRecusar
            testID="Recusar"
            onPress={async () => {
              await updateStatusClasses(item.id, -1);
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
