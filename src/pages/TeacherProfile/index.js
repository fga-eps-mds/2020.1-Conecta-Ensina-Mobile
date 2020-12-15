import React, {useContext, useEffect, useState} from 'react';
import Theme from '../../../Theme';
import {ClassroomContext} from '../../contexts/classroom';
import {TeacherContext} from '../../contexts/teacher';
import Background2 from '../../components/Background2';
import ContinueContainer from '../../components/ContinueContainer';
import RedContainerText from '../../components/RedContainerText';
import CustomTextContainer from '../../components/CustomTextContainer';
import gradeResolver from '../../services/gradeResolver';
import {
  ContainerB,
  ContainerW,
  Icon,
  Logo,
  UserContatiner,
  ButtonContainer,
  ComplainButton,
} from './styles';
import CustomText from '../../components/CustomText';
import {StudentContext} from '../../contexts/student';

export default function TeacherProfile({navigation, route}) {
  const {teacher} = useContext(TeacherContext);
  const {classroom, createClass} = useContext(ClassroomContext);
  const {getStudent} = useContext(StudentContext);

  useEffect(() => {
    //console.log(teacher);
  }, [teacher]);

  const item = classroom;

  return (
    <Theme>
      <Background2
        blue={
          <ContainerB>
            <Logo source={require('../../assets/logo.png')} />
            <UserContatiner>
              <Icon source={require('../../assets/user_blue.png')} />
            </UserContatiner>
            <CustomTextContainer white smallMedium marginTop={{value: '14%'}}>
              {teacher &&
                `${teacher.Student.User.firstName} ${teacher.Student.User.lastName}`}
            </CustomTextContainer>
          </ContainerB>
        }
        white={
          <ContainerW>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Disciplina
            </CustomTextContainer>
            <RedContainerText medium>
              {teacher && teacher.graduation_area}
            </RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Formação
            </CustomTextContainer>
            <RedContainerText medium>
              {teacher && gradeResolver(teacher.Student.grade)}
            </RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Universidade
            </CustomTextContainer>
            <RedContainerText medium>
              {teacher && teacher.Student.institution}
            </RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Especialidade
            </CustomTextContainer>
            <RedContainerText>
              Ja fiz curso para lecionar para crianças dentro do espectro de
              deficit de atençao.
            </RedContainerText>
            <ButtonContainer>
              <ComplainButton
                testID="ComplainButton"
                onPress={async () => {
                  await getStudent(route.params.selectedId);
                  navigation.navigate('FeedbackTeacher', {item});
                }}>
                <CustomText white bigSmall>
                  Reportar
                </CustomText>
              </ComplainButton>
              <ContinueContainer
                testID="ContinueButton"
                onPress={async () => {
                  await createClass(teacher.id);
                  navigation.navigate('Home');
                }}
              />
            </ButtonContainer>
          </ContainerW>
        }
      />
    </Theme>
  );
}
