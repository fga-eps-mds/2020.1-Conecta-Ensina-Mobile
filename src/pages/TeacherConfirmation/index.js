import React, {useContext} from 'react';
import Theme from '../../../Theme';
import {AdmContext} from '../../contexts/admin';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {Container, ContainerGrande, ContainerButton, Button} from './styles';
import {AuthContext} from '../../contexts/auth';

export default function TeacherConfirmation({route, navigation}) {
  const {item} = route.params;
  const {pendingUsers, reportedUsers, students, statusUpdate} = useContext(
    AdmContext,
  );

  return (
    <Theme>
      <Background1 navigation={navigation} page={'TeacherProfile2'}>
        <Container>
          <ContainerGrande>
            <CustomText white>
              {students && students.Student.User.firstName}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {students && students.Student.User.lastName}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {students && students.Student.User.email}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {students && students.Student.User.cellphone}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{students && students.description}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{students.Student.institution}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{students && students.degree}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {students && students.graduation_area}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{students && students.video}</CustomText>
          </ContainerGrande>
        </Container>
        <ContainerButton>
          <Button
            testID="Aceitar"
            onPress={async () => {
              if (pendingUsers !== null) {
                await statusUpdate(item.id, 1);
              } else {
                await statusUpdate(item.id, 2);
              }
              navigation.navigate('HomeAdm');
            }}>
            <CustomText white bigSmall>
              Aceitar
            </CustomText>
          </Button>
          <Button
            testID="Recusar"
            onPress={async () => {
              if (reportedUsers !== null) {
                await statusUpdate(item.id, 1);
              }
              navigation.navigate('HomeAdm');
            }}>
            <CustomText white bigSmall>
              Recusar
            </CustomText>
          </Button>
        </ContainerButton>
      </Background1>
    </Theme>
  );
}
