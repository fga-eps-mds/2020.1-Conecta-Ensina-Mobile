import CountDown from 'react-native-countdown-component';
import React, {useEffect, useContext, useState} from 'react';
import Theme, {theme} from '../../../Theme';
import Background2 from '../../components/Background2';
import RedContainerText from '../../components/RedContainerText';
import CustomTextContainer from '../../components/CustomTextContainer';
import CustomText from '../../components/CustomText';
import {ClassroomContext} from '../../contexts/classroom';
import {UserContext} from '../../contexts/user';
import {TeacherContext} from '../../contexts/teacher';
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
  const {updateStatusClassroom} = useContext(ClassroomContext);
  const {user} = useContext(AuthContext);
  const {classroom, readClass} = useContext(ClassroomContext);
  const {student, getStudent2} = useContext(StudentContext);
  const {teacher, getTeacher} = useContext(TeacherContext);

  const [start, setStart] = useState(false);
  const [run, setRun] = useState(true);

  /*const begin = () => {
    updateStatusClassroom(item.id);
    getClass(item.id);
    if (classroom == 3){
      setStart(true);
    }

  };*/

  /*const finish = () => {
    if (user.role == 2) {
      setRun(false);
      updateStatusClassroom(item.id);
      alert('Aula Finalizada');
    }
  };*/

  const [press, setPress] = useState(false);
  const [press2, setPress2] = useState(false);

  useEffect(() => {
    async function readUser() {
      await getTeacher(item.teacher);
      await getStudent2(item.teacher);
      console.log('Student');
      console.log(student);
    }
    async function classRead() {
      await readClass(item.id);
      if (classroom.status === 3) {
        setStart(true);
      }

      if (classroom.status === 5) {
        setStart(false);
      }
    }
    readUser();
    classRead();
    //readClass('f00c1ee9-078b-4b61-8e3f-a23d68da4312');
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
                  student.user.firstName + ' ' + student.user.lastName}
              </CustomTextContainer>
              <CustomTextContainer white smallMedium marginTop={{value: '2%'}}>
                {student && gradeResolver(student.student.grade)}
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
                  <ChatButton onPress={() => console.log('chat')}>
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
