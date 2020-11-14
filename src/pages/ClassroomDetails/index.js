import React, {useContext, useEffect, useState} from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import RedContainerText from '../../components/RedContainerText';
import CustomTextContainer from '../../components/CustomTextContainer';
import CustomText from '../../components/CustomText';
import {
  ContainerB,
  ContainerW,
  Icon,
  Logo,
  UserContainer,
  ContainerTextBox,
  ContainerTextBlue,
  ContainerWUpper,
  ContainerWLower,
  StartButton,
  ChatButton,
  RouteButton,
  ButtonContainer,
} from './styles';
import {AuthContext} from '../../contexts/auth';
import {ClassroomContext} from '../../contexts/classroom';

export default function ClassroomDetails({navigation, route}) {
  const {item} = route.params;
  const {user} = useContext(AuthContext);
  const {updateStatusClassroom} = useContext(ClassroomContext);

  return (
    <Theme>
      <Background2
        blue={
          <ContainerB>
            <Logo source={require('../../assets/logo.png')} />
            <UserContainer>
              <Icon source={require('../../assets/user_blue.png')} />
            </UserContainer>
            <ContainerTextBlue>
              <CustomTextContainer white bigMedium marginTop={{value: '2%'}}>
                {user.firstName + ' ' + user.lastName}
              </CustomTextContainer>
              <CustomTextContainer white smallMedium marginTop={{value: '2%'}}>
                {item.grade}
              </CustomTextContainer>
            </ContainerTextBlue>
          </ContainerB>
        }
        white={
          <ContainerW>
            <ContainerWUpper>
              <ContainerTextBox>
                <CustomTextContainer
                  black
                  smallMedium
                  marginTop={{value: '2%'}}
                  marginBot={{value: '1%'}}>
                  Disciplina
                </CustomTextContainer>
                <RedContainerText medium>{item.subject}</RedContainerText>
              </ContainerTextBox>
              <ContainerTextBox>
                <CustomTextContainer
                  black
                  smallMedium
                  marginTop={{value: '2%'}}
                  marginBot={{value: '1%'}}>
                  Inicio
                </CustomTextContainer>
                <RedContainerText medium>Matematica</RedContainerText>
              </ContainerTextBox>
            </ContainerWUpper>
            <ContainerWUpper>
              <ContainerTextBox>
                <CustomTextContainer
                  black
                  smallMedium
                  marginTop={{value: '2%'}}
                  marginBot={{value: '1%'}}>
                  Duração
                </CustomTextContainer>
                <RedContainerText medium>{item.duration}</RedContainerText>
              </ContainerTextBox>
              <ContainerTextBox>
                <CustomTextContainer
                  black
                  smallMedium
                  marginTop={{value: '2%'}}
                  marginBot={{value: '1%'}}>
                  Modalidade
                </CustomTextContainer>
                <RedContainerText medium>Matematica</RedContainerText>
              </ContainerTextBox>
            </ContainerWUpper>
            <ContainerWLower>
              <CustomTextContainer
                black
                smallMedium
                marginTop={{value: '2%'}}
                marginBot={{value: '1%'}}>
                Observação
              </CustomTextContainer>
              <RedContainerText>{item.details}</RedContainerText>
              <CustomTextContainer
                black
                smallMedium
                marginTop={{value: '2%'}}
                marginBot={{value: '1%'}}>
                Endereço
              </CustomTextContainer>
              <RedContainerText>{item.cep}</RedContainerText>
            </ContainerWLower>
            <ButtonContainer>
              <ChatButton>
                <CustomText white bigSmall>
                  Chat
                </CustomText>
              </ChatButton>
              <StartButton
                testID="StartButton"
                onPress={() => {
                  navigation.navigate('ShowClass');
                  updateStatusClassroom(item.id, 2);
                }}>
                <CustomText white bigSmall>
                  Iniciar
                </CustomText>
              </StartButton>
              <RouteButton>
                <CustomText white bigSmall>
                  Rota
                </CustomText>
              </RouteButton>
            </ButtonContainer>
          </ContainerW>
        }
      />
    </Theme>
  );
}
