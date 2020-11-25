import React, {useEffect, useContext, useState} from 'react';
import Theme from '../../../Theme';
import Background2 from '../../components/Background2';
import CustomTextContainer from '../../components/CustomTextContainer';
import {UserContext} from '../../contexts/user';
import {StudentContext} from '../../contexts/student';
import {RateContext} from '../../contexts/rate';
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

export default function StudentAvaliation({props, navigation}) {
  const {student} = useContext(StudentContext);
  const {createRate} = useContext(RateContext);
  const [comment, setComment] = useState('');

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
                  student.user &&
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
            <RedCommentContainer
              {...props}
              onChangeText={(text) => setComment(text)}
              defaultValue={comment}
            />
            <SubmitReview
              onPress={() => {
                createRate(comment, 3);
                navigation.navigate('HomeProf');
              }}>
              <CustomTextContainer white medium>
                Enviar Avaliação
              </CustomTextContainer>
            </SubmitReview>
          </ContainerW>
        }
      />
    </Theme>
  );
}
