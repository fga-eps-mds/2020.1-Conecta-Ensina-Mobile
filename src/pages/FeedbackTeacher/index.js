import React, {useContext, useEffect, useState} from 'react';
import Theme from '../../../Theme';
import {AuthContext} from '../../contexts/auth';
import {ClassroomContext} from '../../contexts/classroom';
import Background2 from '../../components/Background2';
import CustomTextContainer from '../../components/CustomTextContainer';
import gradeResolver from '../../services/gradeResolver';
import {ContainerB, ContainerW, Icon, Logo, UserContatiner, ContainerTextBlue, ContainerFlex, ContainerButtons, ComplainButton} from './styles';
import { StudentContext } from '../../contexts/student';
import { UserContext } from '../../contexts/user';
import CommentaryBox from '../../components/CommentaryBox';
import CustomText from '../../components/CustomText';

export default function FeedbackTeacher({navigation, route}) {
  const {Host} = useContext(AuthContext);
  const {createClass, readClass} = useContext(ClassroomContext);
  const {student, getStudent} = useContext(StudentContext);
  const {user, getUser} = useContext(UserContext);

  const getTeacher = async () => {
    const teacherResponse = await fetch(
      `${Host}/api/teacher/` + route.params.classroom.teacher,
    );
    const studentResponse = await fetch(
      `${Host}/api/student/` + route.params.classroom.teacher,
    );
    const userResponse = await fetch(
      `${Host}/api/user/` + route.params.classroom.teacher,
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
    async function readUser() {
      await getUser(classroom.teacher);
      await getStudent(classroom.teacher);
    }

    readUser();
    //readClass('f00c1ee9-078b-4b61-8e3f-a23d68da4312');
  }, []);

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
            <ContainerTextBlue>
              <CustomTextContainer white bigMedium marginTop={{value: '2%'}}>
                {user && user.firstName + ' ' + user.lastName}
              </CustomTextContainer>
              <CustomTextContainer white smallMedium marginTop={{value: '-1%'}}>
                {student && gradeResolver(student.grade)}
              </CustomTextContainer>
            </ContainerTextBlue>
          </ContainerB>
        }
        white={
          <ContainerW>
              <CustomTextContainer black medium marginTop={{value: "2%"}} marginBot={{value: "-2%"}}>
                  Denuncia
              </CustomTextContainer>
              <ContainerFlex>
                  <CommentaryBox placeholder={"insira um comentário"}/>
              </ContainerFlex>
              <ContainerButtons>
                  <ComplainButton>
                      <CustomText white smallMedium>
                          Enviar denuncia
                      </CustomText>
                  </ComplainButton>
              </ContainerButtons>
          </ContainerW>
        }
      />
    </Theme>
  );
}
