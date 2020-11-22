import React, {useEffect, useContext, useState} from 'react';
import Theme, {theme} from '../../../Theme';
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
  FinishButton,
  TimerButton,
  ContainerColumnButton,
} from './styles';

export default function ConfirmedClassDetails({}) {
  const {statusClass} = useContext(ClassroomContext);
  const {student, getStudent} = useContext(StudentContext);
  const {user, getUser} = useContext(UserContext);
  const [start, setStart] = useState(false);
  const [run, setRun] = useState(true);

  useEffect(() => {
    async function readUser() {
      await getUser(statusClass.student);
      await getStudent(statusClass.student);
    }
    readUser();

    console.log(statusClass);
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
                  {statusClass && statusClass.subject}
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
                  {statusClass && statusClass.duration + ' Hora'}
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

            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '0%'}}>
              Observação
            </CustomTextContainer>
            <RedContainerText>{statusClass.details}</RedContainerText>
          </ContainerW>
        }
      />
    </Theme>
  );
}
