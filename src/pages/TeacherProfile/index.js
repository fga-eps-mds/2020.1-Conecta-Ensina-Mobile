import React, {useContext, useEffect, useState} from 'react';
import Theme from '../../../Theme';
import {AuthContext} from '../../contexts/auth';
import {ClassroomContext} from '../../contexts/classroom';
import Background2 from '../../components/Background2';
import ContinueContainer from '../../components/ContinueContainer';
import RedContainerText from '../../components/RedContainerText';
import CustomTextContainer from '../../components/CustomTextContainer';
import gradeResolver from '../../services/gradeResolver';
import {ContainerB, ContainerW, Icon, Logo, UserContatiner} from './styles';

export default function TeacherProfile({navigation, route}) {
  const {Host} = useContext(AuthContext);
  const {createClass} = useContext(ClassroomContext);

  const getTeacher = async () => {
    const teacherResponse = await fetch(
      `${Host}/api/teacher/` + route.params.selectedId,
    );
    const studentResponse = await fetch(
      `${Host}/api/student/` + route.params.selectedId,
    );
    const userResponse = await fetch(
      `${Host}/api/user/` + route.params.selectedId,
    );
    try {
      const dataTeacher = await teacherResponse.json();
      const dataStudent = await studentResponse.json();
      const dataUser = await userResponse.json();

      let teacher = {
        id: route.params.selectedId,
        name: `${dataUser.data.user.firstName} ${dataUser.data.user.lastName}`,
        graduation_area: dataTeacher.data.teacher.graduation_area,
        institution: dataStudent.data.student.institution,
        grade: dataStudent.data.student.grade,
      };
      console.log(teacher);
      setTeacher(teacher);
      return dataTeacher.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    //console.log(teacher);
  }, [teacher]);

  const [teacher, setTeacher] = useState(getTeacher);

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
              {teacher && teacher.name}
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
              {teacher && gradeResolver(teacher.grade)}
            </RedContainerText>
            <CustomTextContainer
              black
              smallMedium
              marginTop={{value: '2%'}}
              marginBot={{value: '1%'}}>
              Universidade
            </CustomTextContainer>
            <RedContainerText medium>
              {teacher && teacher.institution}
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
            <ContinueContainer
              testID="teacherProfileButton"
              onPress={() => {
                createClass(teacher.id);
                navigation.navigate('Home');
              }}
            />
          </ContainerW>
        }
      />
    </Theme>
  );
}
