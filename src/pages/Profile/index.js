import React, {useContext, useState} from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';

import {AuthContext} from '../../contexts/auth';

import {
  TextContainer,
  Container,
  InfoContainer,
  ButtonContainer,
  ContainerBotao,
} from './styles';

export default function Profile({navigation}) {
  const {user, student, signOut} = useContext(AuthContext);
  return (
    <Theme>
      <Background1 navigation={navigation}>
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
          </InfoContainer>
        </Container>
        <ContainerBotao>
          <ButtonContainer
            testID="Editar"
            onPress={() => navigation.navigate('Edit')}>
            <CustomText white bigSmall>
              Editar
            </CustomText>
          </ButtonContainer>
          <ButtonContainer testID="Sair" onPress={() => signOut()}>
            <CustomText white bigSmall>
              Sair
            </CustomText>
          </ButtonContainer>
        </ContainerBotao>
      </Background1>
    </Theme>
  );
}
