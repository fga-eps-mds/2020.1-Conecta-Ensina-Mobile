import CountDown from 'react-native-countdown-component';
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

export default function TeacherClassDetails({}) {
  const {classroom, readClass} = useContext(ClassroomContext);
  const {student, getStudent} = useContext(StudentContext);
  const {user, getUser} = useContext(UserContext);
  const [start, setStart] = useState(false);
  const [run, setRun] = useState(true);

  useEffect(() => {
    async function readUser() {
      await getUser(classroom.student);
      await getStudent(classroom.teacher);
    }
    readUser();
    
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
                  {classroom && classroom.duration + ' Hora'}
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
            <RedContainerText>{classroom.details}</RedContainerText>
            {start ? (
              <ContainerWLower>
                <ContainerColumnButton>
                  <TimerButton>
                    <CountDown
                      running={run}
                      until={60 * 60 * classroom.duration}
                      size={15}
                      onFinish={() => alert('Aula Finalizada')}
                      digitStyle={{backgroundColor: theme.colors.fundoAzul}}
                      digitTxtStyle={{color: theme.colors.branco}}
                      timeToShow={['H', 'M', 'S']}
                      timeLabels={{}}
                    />
                  </TimerButton>
                  <FinishButton onPress={() => {
                    setRun(false)
                    alert('Aula Finalizada')
                  }}>
                    <CustomText white medium>
                      Terminar Aula
                    </CustomText>
                  </FinishButton>
                </ContainerColumnButton>
              </ContainerWLower>
            ) : (
              <ContainerWLower>
                <CustomTextContainer
                  black
                  smallMedium
                  marginTop={{value: '-3%'}}
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
                <ButtonContainer>
                  <ChatButton>
                    <CustomText white bigSmall>
                      Chat
                    </CustomText>
                  </ChatButton>
                  <StartButton
                    testID="StartButton"
                    onPress={() => {
                      setStart(true);
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
              </ContainerWLower>
            )}
          </ContainerW>
        }
      />
    </Theme>
  );
}