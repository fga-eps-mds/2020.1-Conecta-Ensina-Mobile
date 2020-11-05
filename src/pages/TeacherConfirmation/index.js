import React, {useContext} from 'react';
import Theme from '../../../Theme';
import {AdmContext} from '../../contexts/admin';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {Container, ContainerGrande, ContainerButton, Button} from './styles';

export default function TeacherConfirmation({route, navigation}) {
  const {item} = route.params;
  const {userDB, teacher, statusUpdate} = useContext(AdmContext);

  const handleSubmit = async () => {
    statusUpdate(item.id);
  };

  return (
    <Theme>
      <Background1>
        <Container>
          <ContainerGrande>
            <CustomText white>{userDB && userDB.firstName}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{userDB && userDB.lastName}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{userDB && userDB.email}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{userDB && userDB.cellphone}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{teacher && teacher.description}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{item.institution}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{teacher && teacher.degree}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{teacher && teacher.graduation_area}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{teacher && teacher.video}</CustomText>
          </ContainerGrande>
        </Container>
        <ContainerButton>
          <Button onPress={handleSubmit}>
            <CustomText white bigSmall>
              Aceitar
            </CustomText>
          </Button>
          <Button onPress={() => navigation.navigate('PendingTeacher')}>
            <CustomText white bigSmall>
              Recusar
            </CustomText>
          </Button>
        </ContainerButton>
      </Background1>
    </Theme>
  );
}
