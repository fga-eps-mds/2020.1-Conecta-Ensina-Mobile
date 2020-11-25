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
} from './styles';

export default function ConfirmedClassDetails({navigation}) {
  const {statusClass} = useContext(ClassroomContext);
  const {student} = useContext(StudentContext);

  useEffect(() => {
    console.log(statusClass);
    console.log(student);
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
                {student.user &&
                  student.user.firstName + ' ' + student.user.lastName}
              </CustomTextContainer>
              <CustomTextContainer white smallMedium marginTop={{value: '2%'}}>
                {student &&
                  student.student &&
                  gradeResolver(student.student.grade)}
              </CustomTextContainer>
            </ContainerTextBlue>
          </ContainerB>
        }
        white={
          <ContainerW>
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
                Data
              </CustomTextContainer>
              <RedContainerText medium>
                {statusClass && dateResolver(statusClass.dtclass)}
              </RedContainerText>
            </ContainerTextBox>
            <ContainerTextBox>
              <CustomTextContainer
                black
                smallMedium
                marginTop={{value: '2%'}}
                marginBot={{value: '1%'}}>
                Horário
              </CustomTextContainer>
              <RedContainerText medium>
                {timeResolver(statusClass.dtclass)}
              </RedContainerText>
            </ContainerTextBox>
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

            <ContinueContainer
              testID="ContinueContainer"
              onPress={() => {
                navigation.navigate('StudentAvaliation');
              }}
            />
          </ContainerW>
        }
      />
    </Theme>
  );
}
