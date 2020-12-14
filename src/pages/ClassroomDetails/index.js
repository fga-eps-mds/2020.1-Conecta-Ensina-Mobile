import CountDown from 'react-native-countdown-component';
import React, {useEffect, useContext, useState} from 'react';
import Theme, {theme} from '../../../Theme';
import Background2 from '../../components/Background2';
import RedContainerText from '../../components/RedContainerText';
import CustomTextContainer from '../../components/CustomTextContainer';
import CustomText from '../../components/CustomText';
import {ClassroomContext} from '../../contexts/classroom';
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
import {AuthContext} from '../../contexts/auth';

export default function ClassroomDetails({navigation, route}) {
  const {item} = route.params;

  const {
    updateStatusClassroom,
    setStatusClass,
    classroom,
    readClass,
  } = useContext(ClassroomContext);

  const {user} = useContext(AuthContext);
  const {student} = useContext(StudentContext);

  const [start, setStart] = useState(!classroom);
  const [run, setRun] = useState(true);

  const [press, setPress] = useState(false);
  const [press2, setPress2] = useState(false);

  useEffect(() => {
    async function classRead() {
      await readClass(item.id);

      if (classroom.status === 3) {
        setStart(true);
      }

      if (classroom.status === 5 && press2) {
        setStart(false);
        setPress2(false);
        if (user.role === 3) {
          navigation.navigate('TeacherAvaliation');
        } else if (user.role === 2) {
          navigation.navigate('StudentAvaliation');
        }
      }
    }

    classRead();
  }, [classroom]);

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
                {student &&
                  student.User.firstName + ' ' + student.User.lastName}
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
                  {item && item.subject}
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
                  {item && item.duration + ' Hora'}
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
            <RedContainerText>{/*classroom.details*/}</RedContainerText>
            {start ? (
              <ContainerWLower>
                <ContainerColumnButton>
                  <TimerButton>
                    <CountDown
                      testID="countdown"
                      running={run}
                      until={60 * 60 * item.duration}
                      size={15}
                      onFinish={() => alert('Aula Finalizada')}
                      digitStyle={{backgroundColor: theme.colors.fundoAzul}}
                      digitTxtStyle={{color: theme.colors.branco}}
                      timeToShow={['H', 'M', 'S']}
                      timeLabels={{}}
                    />
                  </TimerButton>
                  <FinishButton
                    testID="finishButton"
                    onPress={async () => {
                      await setStatusClass(item);
                      await updateStatusClassroom(item.id);
                      setPress2(true);
                    }}
                    disabled={press2}>
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
                  {item && item.number + ', \n'}
                </RedContainerText>
                <ButtonContainer>
                  <ChatButton>
                    <CustomText white bigSmall>
                      Chat
                    </CustomText>
                  </ChatButton>
                  <StartButton
                    testID="StartButton"
                    onPress={async () => {
                      await updateStatusClassroom(item.id);
                      setPress(true);
                    }}
                    disabled={press}>
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
