import React, {useContext} from 'react';
import Theme from '../../../Theme';

import Background1 from '../../components/Background1';
import CustomText from '../../components/CustomText';

import gradeResolver from '../../services/gradeResolver';

import {AuthContext} from '../../contexts/auth';

import {TextContainer, Container, InfoContainer} from './styles';

export default function TeacherProfile2() {
  const {user, student, teacher} = useContext(AuthContext);
  return (
    <Theme>
      <Background1>
        <Container>
          <InfoContainer>
            <TextContainer>
              <CustomText white medium>
                {user && user.firstName}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {user && user.lastName}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {user && user.email}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {user && user.cellphone}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {student && student.cep}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {student && student.number}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {student && student.details}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {student && student.cpf}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {student && student.description}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {student && student.institution}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white bigSmall>
                {gradeResolver(student.grade)}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white bigSmall>
                {teacher && teacher.video}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {teacher && teacher.graduation_area}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {teacher && teacher.degree}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {teacher && teacher.bank}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {teacher && teacher.agency}
              </CustomText>
            </TextContainer>
            <TextContainer>
              <CustomText white medium>
                {teacher && teacher.account}
              </CustomText>
            </TextContainer>
          </InfoContainer>
        </Container>
      </Background1>
    </Theme>
  );
}
