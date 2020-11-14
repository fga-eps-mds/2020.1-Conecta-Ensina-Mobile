import React, {useEffect, useContext, useState} from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import RedContainerText from '../../components/RedContainerText';
import CustomTextContainer from '../../components/CustomTextContainer';
import CustomText from '../../components/CustomText';
import {ClassroomContext} from '../../contexts/classroom';
import {UserContext} from '../../contexts/user';
import {StudentContext} from '../../contexts/student';
import gradeResolver from '../../services/gradeResolver';
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

export default function ClassroomDetails({navigation}) {
  const {classroom, readClass, loadNextClass} = useContext(ClassroomContext);
  const {student, getStudent} = useContext(StudentContext);
  const {user, getUser} = useContext(UserContext);
  const [address, setAddress] = useState({});

  useEffect(() => {
    async function readUser() {
      await getUser(classroom.teacher);
      await getStudent(classroom.teacher);
    }
    readUser();
    //readClass('f00c1ee9-078b-4b61-8e3f-a23d68da4312');
    console.log(classroom);
  }, []);

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
                {user && user.firstName + ' ' + user.lastName}
              </CustomTextContainer>
              <CustomTextContainer white smallMedium marginTop={{value: '2%'}}>
                {student && gradeResolver(student.grade)}
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
                <RedContainerText medium>
                  {classroom && classroom.subject}
                </RedContainerText>
              </ContainerTextBox>
              <ContainerTextBox>
                <CustomTextContainer
                  black
                  smallMedium
                  marginTop={{value: '2%'}}
                  marginBot={{value: '1%'}}>
                  Inicio
                </CustomTextContainer>
                <RedContainerText medium>16:00</RedContainerText>
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
                <RedContainerText medium>
                  {classroom && classroom.duration + ':00:00'}
                </RedContainerText>
              </ContainerTextBox>
              <ContainerTextBox>
                <CustomTextContainer
                  black
                  smallMedium
                  marginTop={{value: '2%'}}
                  marginBot={{value: '1%'}}>
                  Modalidade
                </CustomTextContainer>
                <RedContainerText medium>Presencial</RedContainerText>
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
              <RedContainerText>{classroom.details}</RedContainerText>
              <CustomTextContainer
                black
                smallMedium
                marginTop={{value: '2%'}}
                marginBot={{value: '1%'}}>
                Endereço
              </CustomTextContainer>
              <RedContainerText>
                {classroom &&
                  classroom.address.logradouro +
                    ' n°: ' +
                    classroom.number +
                    ', \n' +
                    classroom.address.bairro +
                    ' - ' +
                    classroom.address.uf}
              </RedContainerText>
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
                  navigation.navigate('Home');
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
