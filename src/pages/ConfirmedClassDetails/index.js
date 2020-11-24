import React, {useEffect, useContext, useState} from 'react';
import Theme, {theme} from '../../../Theme';
import dateResolver from '../../services/dateResolver';
import timeResolver from '../../services/timeResolver';
import Background2 from '../../components/Background2';
import ContinueContainer from '../../components/ContinueContainer';
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

export default function ConfirmedClassDetails({navigation}) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <RedContainerText medium>{`Horário: ${timeResolver(
                  statusClass.dtclass,
                )}`}</RedContainerText>
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
                  {statusClass && statusClass.duration + ' Horas'}
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
                <RedContainerText medium />
              </ContainerTextBox>
            </ContainerWUpper>
            <ContinueContainer
              onPress={() => navigation.navigate('StudentAvaliation')}
            />
          </ContainerW>
        }
      />
    </Theme>
  );
}
