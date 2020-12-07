import React, {useContext} from 'react';
import Theme from '../../../Theme';
import {AdmContext} from '../../contexts/admin';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {Container, ContainerGrande, ContainerButton, Button} from './styles';

export default function TeacherConfirmation({route, navigation}) {
  const {item} = route.params;
  const {usersAdmin, statusUpdate} = useContext(AdmContext);

  const handleSubmit = async () => {
    await statusUpdate(item.id);
    navigation.navigate('HomeAdm');
  };

  return (
    <Theme>
      <Background1>
        <Container>
          <ContainerGrande>
            <CustomText white>
              {usersAdmin && usersAdmin.user.firstName}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {usersAdmin && usersAdmin.user.lastName}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{usersAdmin && usersAdmin.user.email}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {usersAdmin && usersAdmin.user.cellphone}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {usersAdmin && usersAdmin.teacher.description}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{usersAdmin.student.institution}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {usersAdmin && usersAdmin.teacher.degree}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {usersAdmin && usersAdmin.teacher.graduation_area}
            </CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>
              {usersAdmin && usersAdmin.teacher.video}
            </CustomText>
          </ContainerGrande>
        </Container>
        <ContainerButton>
          <Button testID="Aceitar" onPress={handleSubmit}>
            <CustomText white bigSmall>
              Aceitar
            </CustomText>
          </Button>
          <Button
            testID="Recusar"
            onPress={() => navigation.navigate('PendingTeacher')}>
            <CustomText white bigSmall>
              Recusar
            </CustomText>
          </Button>
        </ContainerButton>
      </Background1>
    </Theme>
  );
}
