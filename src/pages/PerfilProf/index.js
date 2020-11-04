import React, {useState, useContext, useEffect} from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import ContainerVoltar from '../../components/ContainerVoltar';
import RedContainerTextBig from '../../components/RedContainerTextBig';
import RedContainerTextMedium from '../../components/RedContainerTextMedium';
import CustomText from '../../components/CustomText';
import {AuthContext} from '../../contexts/auth';
import gradeResolver from '../../services/gradeResolver';
import {
  BlackTextContainer,
  ContainerB,
  ContainerFooter,
  ContainerW,
  Icon,
  Logo,
  MiniContainer,
  UserContatiner,
  WhiteTextContainer,
} from './styles';

export default function PerfilProf({navigation, route}) {
  //console.log(route.params.selectedId);

  const {Host} = useContext(AuthContext);

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
            <WhiteTextContainer>
              <CustomText white smallMedium>
                {teacher && teacher.name}
              </CustomText>
            </WhiteTextContainer>
          </ContainerB>
        }
        white={
          <ContainerW>
            <MiniContainer>
              <BlackTextContainer>
                <CustomText black smallMedium>
                  Disciplina
                </CustomText>
              </BlackTextContainer>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>
                {teacher && teacher.graduation_area}
              </RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTextContainer>
                <CustomText black smallMedium>
                  Formação
                </CustomText>
              </BlackTextContainer>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>
                {teacher && gradeResolver(teacher.grade)}
              </RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTextContainer>
                <CustomText black smallMedium>
                  Universidade
                </CustomText>
              </BlackTextContainer>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextMedium>
                {teacher && teacher.institution}
              </RedContainerTextMedium>
            </MiniContainer>
            <MiniContainer>
              <BlackTextContainer>
                <CustomText black smallMedium>
                  Especialidade
                </CustomText>
              </BlackTextContainer>
            </MiniContainer>
            <MiniContainer>
              <RedContainerTextBig>
                Ja fiz curso para lecionar para crianças dentro do espectro de
                deficit de atençao.
              </RedContainerTextBig>
            </MiniContainer>
            <ContainerFooter>
              <ContainerVoltar>Agendar</ContainerVoltar>
            </ContainerFooter>
          </ContainerW>
        }
      />
    </Theme>
  );
}
