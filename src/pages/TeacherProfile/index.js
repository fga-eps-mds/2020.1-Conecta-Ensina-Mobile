import React, {useContext, useEffect, useState} from 'react';
import Theme from '../../../Theme';
import {AuthContext} from '../../contexts/auth';
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
  const {createClass, readClass} = useContext(ClassroomContext);
  const {getStudent} = useContext(StudentContext);

  useEffect(() => {
    //console.log(teacher);
  }, [teacher]);

  const params = route.params.selectedId;

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
              {teacher && `${teacher.user.firstName} ${teacher.user.lastName}`}
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
              {teacher && teacher.teacher.graduation_area}
            </RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Formação
            </CustomTextContainer>
            <RedContainerText medium>
              {teacher && gradeResolver(teacher.student.grade)}
            </RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Universidade
            </CustomTextContainer>
            <RedContainerText medium>
              {teacher && teacher.student.institution}
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
                  navigation.navigate('FeedbackTeacher', {params});
                }}>
                <CustomText white bigSmall>
                  Reportar
                </CustomText>
              </ComplainButton>
              <ContinueContainer
                testID="ContinueButton"
                onPress={async () => {
                  await getStudent(teacher.id);
                  await readClass('f00c1ee9-078b-4b61-8e3f-a23d68da4312');
                  await createClass(teacher.id);
                  navigation.navigate('ClassroomDetails');
                }}
              />
            </ButtonContainer>
          </ContainerW>
        }
      />
    </Theme>
  );
}
