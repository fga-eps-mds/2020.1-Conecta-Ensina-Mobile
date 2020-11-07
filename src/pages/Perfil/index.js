import React, {useContext, useState} from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';

import gradeResolver from '../../services/gradeResolver';

import {AuthContext} from '../../contexts/auth';

import {
  TextContainer,
  Container,
  InfoContainer,
  ButtonContainer,
  ContainerBotao
} from './styles';

export default function Perfil({navigation}) {
  const {user, student, signOut} = useContext(AuthContext);
  const [editar, setEditar] = useState(false);

  if (editar) {
    return <Edit onChange={setEditar} />
  } else {
    return (
      <Theme>
        <Background1>
          <Container>
            <InfoContainer>
              <TextContainer>
                <CustomText white medium>
                  {user && user.firstName}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {user && user.lastName}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {user && user.email}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {user && user.cellphone}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.cep}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.number}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.details}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.cpf}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.description}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white medium>
                  {student && student.institution}
                </CustomText>
              </TextContainer>
              <TextContainer>
                <CustomText white bigSmall>
                  {student && gradeResolver(student.grade)}
                </CustomText>
              </TextContainer>
            </InfoContainer>
          </Container>
          <ContainerBotao>
            <ButtonContainer onPress={() => navigation.navigate('Edit')}>
              <CustomText white bigSmall>
                Editar
              </CustomText>
            </ButtonContainer>
            <ButtonContainer onPress={() => signOut()}>
              <CustomText white bigSmall>
                Sair
              </CustomText>
            </ButtonContainer>
          </ContainerBotao>
          
        </Background1>
      </Theme>
    );
  }
}
