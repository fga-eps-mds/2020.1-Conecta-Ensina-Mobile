import React, {useContext, useEffect} from 'react';
import Theme from '../../../Theme';
import {AdmContext} from '../../contexts/admin';
import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';
import {Container, ContainerGrande, ContainerButton, Button} from './styles';

export default function ConfirmaProf({route, navigation}) {
  const {item} = route.params;
  const {user, teacher, statusUpdate} = useContext(AdmContext);
  
  const handleSubmit = async () => {
    statusUpdate(item.id);
  };

  return (
    <Theme>
      <Background1>
        <Container>
          <ContainerGrande>
            <CustomText white>{user && user.firstName}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{user && user.lastName}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{user && user.email}</CustomText>
          </ContainerGrande>
          <ContainerGrande>
            <CustomText white>{user && user.cellphone}</CustomText>
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
