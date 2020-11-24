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
    ContainerTextBlue,
    RedCommentContainer,
    SubmitReview,
  } from './styles';

export default function StudentAvaliation({}){

    const {statusClass} = useContext(ClassroomContext);
    const {student, getStudent} = useContext(StudentContext);
    const {user, getUser} = useContext(UserContext);

    useEffect(() => {
      async function readUser() {
        await getUser(statusClass.student);
        await getStudent(statusClass.student);
      }
      readUser();
  
      console.log(statusClass);
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
                        <RedCommentContainer/>
                        <SubmitReview>
                            <CustomTextContainer white medium>
                                Enviar Avaliação
                            </CustomTextContainer>
                        </SubmitReview>
                    </ContainerW>
                }
            />
        </Theme>
    )
}